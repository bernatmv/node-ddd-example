import GetDeveloperRequest from '../models/getDeveloperRequest';
import Developer from '../models/developer';
import GetAppRequest from '../models/getAppRequest';
import App from '../models/app';

interface ReferenceDataServiceInterface {
  getDeveloper(request: GetDeveloperRequest): Promise<Developer>;
  getApp(request: GetAppRequest): Promise<App>;
}
export default ReferenceDataServiceInterface;
