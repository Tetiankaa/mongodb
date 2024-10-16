import {ObjectId} from "mongodb";

export interface IProduct {
    _id?: ObjectId;
    item: string;
    price: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}
