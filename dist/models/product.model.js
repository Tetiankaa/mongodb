"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    item: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false
});
exports.Product = mongoose_1.default.model('Product', schema);
