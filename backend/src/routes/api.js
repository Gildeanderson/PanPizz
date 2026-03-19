import express from 'express';
import { getProducts } from '../controllers/productController.js';
import { createOrder } from '../controllers/orderController.js';

const router = express.Router();

// Rota de listagem de pães e pizzas
router.get('/products', getProducts);

// Rota de finalização do Checkout
router.post('/orders', createOrder);

export default router;
