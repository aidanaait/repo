import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import '../styles.css';
import {Form, Button, Container, Alert} from 'react-bootstrap';

const FaEdit = () => {

    const editURL = "http://localhost:8080/recepy/";
    const navigate = useNavigate();
    const param = useParams();
    const [id, setId] = useState('');
    const [imageurl, setImageUrl] = useState('');
    const [label, setLabel] = useState('');
    const [calories, setCalories] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [suteUrl, setSiteUrl] = useState('');
    const [ingr, setIng] = useState('');

    useEffect(() => {
        axios.get(editURL + param.id).then((response) => {
            const resData = response.data;
            console.log(resData)
            setImageUrl(resData.imageurl);
            setLabel(resData.label);
            setCalories(resData.calories);
            setCuisineType(resData.cuisineType);
            setSiteUrl(resData.siteUrl);
            setIng(resData.totalIng);
            setId(param.id);
        }).catch(error => {
            alert("Error Ocurred getting detail:" + error);
        });
    }, []);



    const changeCal = (event) => {
        setCalories(event.target.value);
    };
    const changeCus = (event) => {
        setCuisineType(event.target.value);
    };
    const changeIng = (event) => {
        setIng(event.target.value);
    };
    const submitActionHandler = (event) => {
        event.preventDefault();
        axios
            .put(editURL + param.id, {
                cuisineType: cuisineType,
                calories: calories,
                ingredients: ingr
            })
            .then((response) => {
                alert("Fs " + id + " updated!");
                navigate('/home')

            }).catch(error => {
                alert("Error Ocurred updating:" + error);
            });

    };

    return (
        <Alert variant='primary'>
            <Container>
                <Form onSubmit={submitActionHandler} id="data">
                    <Form.Group controlId="form.id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" value={id} readOnly />
                    </Form.Group>
                    <Form.Group controlId="form.Name">
                        <Form.Label>Label</Form.Label>
                        <Form.Control type="text" value={label} readOnly />
                    </Form.Group>
                    <Form.Group controlId="form.Calories">
                        <Form.Label>Calories</Form.Label>
                        <Form.Control type="text" onChange={changeCal} value={calories} />
                    </Form.Group>
                    <Form.Group controlId="form.Cuisine">
                        <Form.Label>Cuisine</Form.Label>
                        <Form.Control type="text" onChange={changeCus} value={cuisineType} />
                    </Form.Group>
                    <Form.Group controlId="form.Ing">
                        <Form.Label>Ing</Form.Label>
                        <Form.Control type="number" onChange={changeIng} value={ingr} />
                    </Form.Group>
                    <br></br>
                    <Button type='submit'>Update </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type='submit' onClick={() => navigate("/home")}>Cancel</Button>
                </Form>
            </Container>
        </Alert>

    );
}
export default FaEdit;

