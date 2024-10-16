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
exports.productCollection = void 0;
const mongodb_1 = require("mongodb");
const configs_1 = require("../configs/configs");
const client = new mongodb_1.MongoClient(`${configs_1.configs.mongodb}`);
let productCollection;
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield client.connect();
            console.log("Connected to MongoDB");
            const db = connection.db('test');
            exports.productCollection = productCollection = db.collection('products');
        }
        catch (e) {
            console.error("Connection failed:", e);
        }
    });
}
connectToDatabase().then();
