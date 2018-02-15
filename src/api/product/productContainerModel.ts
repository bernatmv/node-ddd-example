import ReferenceDataServiceInterface from '../../common/services/referenceDataServiceInterface';
import Product from './models/product';
import GetAppRequest from '../../common/models/getAppRequest';
import GetDeveloperRequest from '../../common/models/getDeveloperRequest';

class ProductContainerModel {

  constructor(
    private _referenceDataService: ReferenceDataServiceInterface,
  ) {}

  async getProduct(id: number): Promise<Product> {
    const app = await this._referenceDataService.getApp(new GetAppRequest(id));
    const developer = await this._referenceDataService.getDeveloper(new GetDeveloperRequest(app.developerId));
    return new Product(app, developer);
  }
}
export default ProductContainerModel;
