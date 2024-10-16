import { Router, Request, Response } from "express";

import {IProduct} from "../interfaces/product.interface";
import {Product} from "../models/product.model";

const router = Router();

router.get('/',  async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.json(products);
    }catch (e) {
        console.error(e);
    }
});
router.post('/',  async (req: Request, res: Response) => {
    try {
        const product = req.body as Partial<IProduct>;

       const savedProduct = await Product.create(product);
       res.status(201).json(savedProduct);
    }catch (e) {
        console.error(e);
    }
});
router.patch('/:id',  async (req: Request, res: Response) => {
    try {
        const body = req.body as Partial<IProduct>;
        const id = req.params.id;

        const product = await Product.findOneAndUpdate({_id: id}, {...body},{returnDocument: 'after'});
        res.json(product);
    }catch (e) {
        console.error(e);
    }
});
router.delete('/:id',  async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        await Product.deleteOne({_id: id });

        res.sendStatus(204);
    }catch (e) {
        console.error(e);
    }
})
export const productRouter = router;
