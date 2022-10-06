import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(201).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;

    const productCreated = await this.productService.create({ name, amount });
    res.status(201).json(productCreated);
  };
}