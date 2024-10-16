import { Router, Request, Response } from 'express';
import { DeleteResult, InsertOneResult, ObjectId } from "mongodb";

import { IProduct } from "../interfaces/product.interface";
import { productCollection } from '../database/connection';

const router = Router();

router.get('/',  async (req: Request, res: Response) => {
    try {
        const result = productCollection.find();

        const products = await result.toArray();
        res.json(products);
    }catch (e) {
        console.error(e);
    }
});
router.post('/',  async (req: Request, res: Response) => {
    try {
        const productToSave = req.body as IProduct;

        const savedProduct: InsertOneResult<IProduct> = await productCollection.insertOne(
            {...productToSave,
                createdAt: new Date(),
                updatedAt: new Date()});

        const product = await productCollection.findOne({_id: savedProduct.insertedId});

        res.status(201).json(product);
    }catch (e) {
        console.error(e);
    }
});
router.patch('/:id',  async (req: Request, res: Response) => {
    try {
        const body = req.body as Partial<IProduct>;
        const id = new ObjectId(req.params.id);

        const product = await productCollection.findOneAndUpdate({_id: id},
            {$set: {...body}},
            {returnDocument: 'after'})

        res.json(product);
    }catch (e) {
        console.error(e);
    }
});
router.delete('/:id',  async (req: Request, res: Response) => {
    try {
        const id = new ObjectId(req.params.id);
        const deleteResult: DeleteResult= await productCollection.deleteOne({_id: id});

        if (deleteResult.deletedCount === 0) {
             res.status(404).json("Resource not found");
        }
        res.sendStatus(204);
    }catch (e) {
        console.error(e);
    }
})

export const productRouter = router;
