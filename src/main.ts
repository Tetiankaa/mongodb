import express from "express";
import * as mongoose from "mongoose";

import {configs} from "./configs/configs";
import {productRouter} from "./routers/product.router";

const app = express();
app.use(express.json());

app.use('/products', productRouter);

app.listen(configs.port, async () => {
    await mongoose.connect(`${configs.mongodb}`).then(() => {
        console.log('MongoDB successfully connected');
    })
    console.log(`Listening on port: ${configs.port}`);
});
