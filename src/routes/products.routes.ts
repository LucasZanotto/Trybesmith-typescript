import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();
const productsController = new ProductController();

router.get('/', productsController.getAll);
router.post('/', productsController.create);

export default router;