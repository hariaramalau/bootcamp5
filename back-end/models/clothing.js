const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bootcamp4");

const Schema = mongoose.Schema;

const clothingSchema = new Schema({

    type: String,
    _id : String,
    name: String,
    price : Number,
    picture : String
    
})

const Clothing = mongoose.model("clothing", clothingSchema);

module.exports = Clothing;
