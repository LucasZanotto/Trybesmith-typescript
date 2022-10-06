import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import UserController from '../controllers/users.controller';

const router = Router();
const productsController = new ProductController();
const usersController = new UserController();

router.get('/products', productsController.getAll);
router.post('/products', productsController.create);
router.post('/users', usersController.createUser);

export default router;