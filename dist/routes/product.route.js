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
const connection_1 = require("../database/connection");
const mongodb_1 = require("mongodb");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = connection_1.productCollection.find();
        const products = yield result.toArray();
        res.json(products);
    }
    catch (e) {
        console.error(e);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productToSave = req.body;
        const savedProduct = yield connection_1.productCollection.insertOne(Object.assign(Object.assign({}, productToSave), { createdAt: new Date(), updatedAt: new Date() }));
        const product = yield connection_1.productCollection.findOne({ _id: savedProduct.insertedId });
        res.status(201).json(product);
    }
    catch (e) {
        console.error(e);
    }
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const id = new mongodb_1.ObjectId(req.params.id);
        const product = yield connection_1.productCollection.findOneAndUpdate({ _id: id }, { $set: Object.assign({}, body) }, { returnDocument: 'after' });
        res.json(product);
    }
    catch (e) {
        console.error(e);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = new mongodb_1.ObjectId(req.params.id);
        const deleteResult = yield connection_1.productCollection.deleteOne({ _id: id });
        if (deleteResult.deletedCount === 0) {
            res.status(404).json("Resource not found");
        }
        res.sendStatus(204);
    }
    catch (e) {
        console.error(e);
    }
}));
exports.productRouter = router;
