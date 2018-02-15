import * as express from 'express';
import api from './api';
import Printer from './view/printer';
import JsonAdapter from './view/adapters/jsonAdapter';
import ProductMapper from './api/product/mappers/productMapper';

const app = express();
const API = '/api';
const printer = new Printer(new ProductMapper());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get(API + '/product/:id', (req, res) => {
  api.product.getProduct(req.params.id)
    .then((product) => {
      printer.setAdapter(new JsonAdapter(res)).printProduct(product);
    })
    .catch(console.error);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
