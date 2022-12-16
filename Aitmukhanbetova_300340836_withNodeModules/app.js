const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const {urlencoded} = require("body-parser");
const Recepy = require("./models/recepy");
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
//Database connection
const url = "mongodb://localhost:27017/finalExamDB";
mongoose.connect(url)

app.get('/all',
    async (req, res) => {
        const rec = await Recepy.find({});
        res.send(
            {
                rec: rec
            }
        );

    }
)
app.get('/recepy/:id',
    async (req, res) => {
        const rec = await Recepy.findOne({'label': req.params.id});
        res.send(rec);

    }
)
app.delete('/recepy/:id',
    async (req, res) => {
        const rec = await Recepy.deleteOne({'label': req.params.id});
        res.send({});
    }
)
app.put('/recepy/:id',
    async (req, res) => {
        const rec = await Recepy.findOne({'label': req.params.id});
        rec.cuisineType = req.body.cuisineType;
        rec.calories = req.body.calories;
        rec.totalIng = req.body.ingredients;
        await rec.save();
        res.send({});

    }
)
app.post('/save',
    async (req, res) => {
        const recepies = req.body.recepies;
        let exists = await Recepy.find({});
        console.log(exists);
        if (exists.length == 0) {
            for (var i = 0; i < recepies.length; i++) {
                let recipe = recepies[i];
                let element = new Recepy({
                    imageurl: recipe.imageurl,
                    label: recipe.label,
                    calories: recipe.calories,
                    cuisineType: recipe.cuisineType,
                    siteUrl: recipe.siteUrl,
                    totalIng: recipe.totalIng
                })
                await element.save()
                console.log("saved")
            }
        } else {
            console.log("Ignore")
        }
        res.send({});
    }
)

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`The server is up and listening on port ${port}`);
});

