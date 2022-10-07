import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrder(): Promise<Order[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders');
    const [rows] = result;
    return rows as Order[];
  }

  public async getOrder(): Promise<Order[]> {
    const result = await this.connection
      .execute(`SELECT ord.id, ord.userId, JSON_ARRAYAGG(pr.id) productsIds
      FROM Trybesmith.Orders ord
      INNER JOIN Trybesmith.Products pr 
      ON ord.id = pr.orderId
      GROUP BY ord.id
      ORDER BY ord.id ASC`);
    const [rows] = result;
    return rows as Order[];
  }
}

// id?: number;
// name: string;
// amount: number;
// orderId?: number;

// "username": "MAX",
//   "classe": "swordsman",
//   "level": 10,
//   "password": "SavingPeople"

// interface Order {
//   id?: number;
//   userId: number;
// }