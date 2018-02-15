import ReferenceDataServiceImpl from '../src/common/services/referenceDataServiceImpl';
import ReferenceDataClientStub from '../src/common/stubs/referenceDataClientStub';
import DeveloperMapper from '../src/common/mappers/developerMapper';
import AppMapper from '../src/common/mappers/appMapper';
import ProductContainerModel from '../src/api/product/productContainerModel';
import Product from '../src/api/product/models/product';

describe('Product API', () => {

  const referenceDataServiceImpl = new ReferenceDataServiceImpl(new ReferenceDataClientStub(), new DeveloperMapper(), new AppMapper());
  const productApi = new ProductContainerModel(referenceDataServiceImpl);

  describe('Request for a product using an id', () => {
    // TODO: not working as we have to use __mocks__ for resolving the promises
    const response = productApi.getProduct(1);

    it('Should return something', () => {
      expect(result).not.toBeNull;
    });

    it('Should return an instance of Product', () => {
      expect(result).toBeInstanceOf(Product);
    });

    it('Should return app Ares and developer AresGalaxy', () => {
      expect(result.app.title).toBe('Ares');
      expect(result.developer.name).toBe('AresGalaxy');
    });  
});
});
