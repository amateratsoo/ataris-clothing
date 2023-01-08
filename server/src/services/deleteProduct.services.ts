import { Product } from '../models/product';

async function deleteProduct(id: number) {
  return await Product.destroy({
    where: {
      id
    }
  });
}

export { deleteProduct };
