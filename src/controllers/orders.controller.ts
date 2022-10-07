import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAllOrder = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getOrder();
    res.status(200).json(orders);
  };
}

//  "id": 1,
//   "userId": 2,
//   "productsIds": [1, 2]