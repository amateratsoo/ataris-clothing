import { Product } from '../models/product';
import { ProductProps } from '../types';

async function postProduct({ imageUrl, name, price }: ProductProps) {
  return await Product.create({
    imageUrl,
    name,
    price
  });
}

export { postProduct };
