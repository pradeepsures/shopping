const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default:
            "https://images.unsplash.com/photo-1711127263278-07edabd1990d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
        set: 
        (v) => v === "" ? 
        "https://images.unsplash.com/photo-1711127263278-07edabd1990d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
         : v,
    }, 
    price:Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;