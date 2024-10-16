import mongoose from "mongoose";
import {IProduct} from "../interfaces/product.interface";

const schema = new mongoose.Schema({
    item: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
}, {
    timestamps: true,
    versionKey: false
})

export const Product = mongoose.model<IProduct>('Product', schema);
