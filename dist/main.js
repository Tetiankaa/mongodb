"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = require("./configs/configs");
const product_route_1 = require("./routes/product.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/products', product_route_1.productRouter);
app.listen(configs_1.configs.port, () => {
    console.log(`Listening on port: ${configs_1.configs.port}`);
});
