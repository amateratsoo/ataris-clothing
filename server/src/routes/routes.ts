import { Router } from 'express';
import { getProducts } from '../controllers/getProducts.controllers';
import { deleteProduct } from '../controllers/deleteProduct.controllers';
import { postProduct } from '../controllers/postProduct.controllers';

const router = Router();

router.get('/get-products', getProducts);
router.delete('/delete-product', deleteProduct)
router.post('/create-product', postProduct);

router.use('/*', (_, response) => {
  response
    .status(404)
    .send({ message: 'page not found' })
});

export { router };
