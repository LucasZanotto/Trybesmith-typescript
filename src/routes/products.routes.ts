import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import ProductController from '../controllers/products.controller';
import UserController from '../controllers/users.controller';

const router = Router();
const productsController = new ProductController();
const usersController = new UserController();
const ordersController = new OrderController();

router.get('/products', productsController.getAll);
router.post('/products', productsController.create);
router.post('/users', usersController.createUser);
router.get('/orders', ordersController.getAllOrder);
router.post('/login');

export default router;