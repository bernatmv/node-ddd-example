import App from '../../../common/models/app';
import Developer from '../../../common/models/developer';

class Product {
  constructor(
    public app: App,
    public developer: Developer,
  ) {}
}
export default Product;
