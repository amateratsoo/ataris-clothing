import { Request, Response } from 'express';
import { postProduct as addProduct } from '../services/postProduct.services';
import { ProductProps } from '../types';

async function postProduct(request: Request, response: Response) {
  const { imageUrl, name, price } = request.body;
  const data = await addProduct({ imageUrl, name, price });

  response
    .status(200)
    .json({ data });
}

export { postProduct };
