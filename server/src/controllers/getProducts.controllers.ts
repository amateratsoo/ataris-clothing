import { Request, Response } from 'express';
import { getProducts as fetchProducts } from '../services/getProducts.services';

async function getProducts(request: Request, response: Response) {
  const data = await fetchProducts();

  response
    .status(200)
    .json({ data });
}

export { getProducts };
