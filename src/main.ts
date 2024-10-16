import express from "express";

import {configs} from "./configs/configs";

const app = express();
app.use(express.json());

app.listen(configs.port, () => {
    console.log(`Listening on port: ${configs.port}`);
})
