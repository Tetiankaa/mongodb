import express from "express";

import {configs} from "./configs/configs";
import {productRouter} from "./routes/product.route";

const app = express();
app.use(express.json());

app.use('/products', productRouter);

app.listen(configs.port,   () => {
    console.log(`Listening on port: ${configs.port}`);
});
