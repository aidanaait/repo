import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import '../styles.css';
import axios from "axios";

const MainTable = () => {


    const [recepy, setRecepy] = useState([]);
    const navigate = useNavigate();
    const fetch = () => {
        axios.get("http://localhost:8080/all").then((response) => {
            let all = response.data.rec;
            if (all.length == 0) {
                axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=veg&app_id=3cff0be6&app_key=e6778c0d3b06531cf66ace31e6a39c79&mealType=Lunch&diet=low-carb&ingr=2-5&imageSize=SMALL").then((response) => {
                    let array = [];
                    let hits = response.data.hits;
                    for (var i = 0; i < 12; i++) {
                        const recipe = hits[i].recipe;
                        var totalIng = recipe.ingredients.length;
                        let element = {
                            imageurl: recipe.image,
                            label: recipe.label,
                            calories: Math.round(recipe.calories),
                            cuisineType: recipe.cuisineType[0],
                            siteUrl: recipe.uri,
                            totalIng: totalIng
                        }
                        array.push(element)
                    }
                    axios
                        .post("http://localhost:8080/save", {
                            recepies: array,
                        })
                        .then((response) => {
                            console.log("HERE");
                            setRecepy(array);

                        }).catch(error => {
                            alert("Error Ocurred updating:" + error);
                        });
                }).catch(error => {
                    console.log(error);
                });
            } else {
                let array = [];
                for (var i = 0; i < all.length; i++) {
                    let recipe = all[i];
                    let element = {
                        imageurl: recipe.imageurl,
                        label: recipe.label,
                        calories: recipe.calories,
                        cuisineType: recipe.cuisineType,
                        siteUrl: recipe.siteUrl,
                        totalIng: recipe.totalIng
                    }
                    array.push(element)
                }
                setRecepy(array);
            }
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetch();
    }, []);

    const remove = (id) => {
        axios.delete("http://localhost:8080/recepy/" + id).then((response) => {
            fetch();
            navigate('/home')
        }).catch(error => {
            console.log("HERE")
        });
    }


    return (
        <div>
            {
                recepy &&
                recepy.map((rec, index) => (
                    <div className="recipe" key={rec.label} >
                        <img src={rec.imageurl} width={100} height={100} />
                        <h3>{rec.label}</h3>
                        <h3>{rec.cuisineType}</h3>
                        <h3>{rec.calories}</h3>
                        <sup>{rec.totalIng}</sup>
                        <p>{rec.siteUrl}</p>
                        <Link className='btn btn-primary' to={"/edit/" + rec.label}>
                            Edit
                        </Link>
                        <button className='btn btn-danger'
                            onClick={() => remove(rec.label)} >
                            Delete
                        </button>
                    </div>

                ))
            }
        </div >
    );
}
export default MainTable;

