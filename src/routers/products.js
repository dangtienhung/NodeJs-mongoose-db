import { createProduct } from '../controllers/products';
import express from 'express';

const router = express.Router();

router.post('/products', createProduct);

export default router;
