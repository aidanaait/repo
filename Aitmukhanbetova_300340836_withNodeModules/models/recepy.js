//you must create a schema with following validation rules and compile schema into the model. the model must be saved inside model->recipe.js
const mongoose = require('mongoose');
const recepySchema = new mongoose.Schema({
    label: {
        type: String,
        require: true
    },
    calories: {
        type: Number,
        require: true
    },
    cuisineType: {
        type: String
    },
    imageUrl: {
        type: String,
        require: true
    },
    totalIng: {
        type: Number,
        require: true
    },
    siteurl: {
        tyle: String
    }

})

recepySchema.method('toJSON', function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});
const Recepy = mongoose.model("Recepy", recepySchema);
module.exports = Recepy;

