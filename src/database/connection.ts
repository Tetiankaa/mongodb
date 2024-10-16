import {Collection, MongoClient} from "mongodb";

import {configs} from "../configs/configs";
import {IProduct} from "../interfaces/product.interface";

const client = new MongoClient(`${configs.mongodb}`);

let productCollection: Collection<IProduct>;

async function connectToDatabase() {
    try {
         const connection = await client.connect();
         console.log("Connected to MongoDB");
         const db = connection.db('test');
         productCollection = db.collection<IProduct>('products');
    } catch (e) {
        console.error("Connection failed:", e);
    }
}

connectToDatabase().then();

export { productCollection }
