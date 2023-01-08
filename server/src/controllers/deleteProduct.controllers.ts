import { Request, Response } from 'express';
import { deleteProduct as removeProduct } from '../services/deleteProduct.services';

async function deleteProduct(request: Request, response: Response) {
  const { id } = request.body;
  const data = await removeProduct(id);

  response
    .status(200)
    .json({ data });
}

export { deleteProduct };
