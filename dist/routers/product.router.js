"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_model_1 = require("../models/product.model");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.Product.find();
        res.json(products);
    }
    catch (e) {
        console.error(e);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const savedProduct = yield product_model_1.Product.create(product);
        res.status(201).json(savedProduct);
    }
    catch (e) {
        console.error(e);
    }
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const id = req.params.id;
        const product = yield product_model_1.Product.findOneAndUpdate({ _id: id }, Object.assign({}, body), { returnDocument: 'after' });
        res.json(product);
    }
    catch (e) {
        console.error(e);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield product_model_1.Product.deleteOne({ _id: id });
        res.sendStatus(204);
    }
    catch (e) {
        console.error(e);
    }
}));
exports.productRouter = router;
