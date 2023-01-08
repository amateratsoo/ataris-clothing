import { Product } from '../models/product';

async function getProducts() {
  return await Product.findAll();
}

export { getProducts };
