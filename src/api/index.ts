import ProductContainerModel from './product/productContainerModel';
import ReferenceDataServiceImpl from '../common/services/referenceDataServiceImpl';
import ReferenceDataClientStub from '../common/stubs/referenceDataClientStub';
import DeveloperMapper from '../common/mappers/developerMapper';
import AppMapper from '../common/mappers/appMapper';

// This would be better with a dependency injection container on a module/mapper class where we can define dependencies as transient or once-instanced
const referenceDataServiceImpl = new ReferenceDataServiceImpl(new ReferenceDataClientStub(), new DeveloperMapper(), new AppMapper());

const product = new ProductContainerModel(referenceDataServiceImpl);

const api = {
  product,
};

export default api;
