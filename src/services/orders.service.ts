import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';
import ProductModel from '../models/product.model';

export default class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  // public async getAllOrder(): Promise<Order[]> {
  //   const orders = await this.model.getAllOrder();
  //   const promises = orders.map(async ({ id, userId }) => {
  //     const productId = await this.productModel.getByOrderId(id);
  //     return {
  //       id,
  //       userId,
  //       productsIds: [productId.map((sla) => sla.id)],
  //     };
  //   });
  //   return Promise.all(promises);
  // }

  public async getOrder(): Promise<Order[]> {
    const orders = await this.model.getOrder();
    return orders;
  }
}

// interface Order {
//   id?: number;
//   userId: number;
//   productId?: number[];
// }

//       "id": 1,
//       "userId": 2,
//       "productsIds": [1, 2]