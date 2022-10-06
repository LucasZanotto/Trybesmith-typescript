import express, { Request, Response } from 'express';
import ProductsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/', ProductsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Conexão ta Okey :D');
});

export default app;
