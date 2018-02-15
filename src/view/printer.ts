import AdapterInterface from './adapters/adapterInterface';
import Product from '../api/product/models/product';
import ProductMapper from '../api/product/mappers/productMapper';

class Printer {
  private _adapter: AdapterInterface;

  constructor(
    private _productMapper: ProductMapper,
  ) {}

  setAdapter(adapter: AdapterInterface): Printer {
    this._adapter = adapter;
    return this;
  }

  printProduct(product: Product): void {
    if (this._adapter) {
      this._adapter.sendToOutput(this._productMapper.toDto(product));
    }
  }
}
export default Printer;
