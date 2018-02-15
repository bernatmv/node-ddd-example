import { GetDeveloperRequestDto, GetAppRequestDto } from '../dtos/readServices/referenceDataDtos';
import GetDeveloperRequest from '../models/getDeveloperRequest';
import Developer from '../models/developer';
import GetAppRequest from '../models/getAppRequest';
import App from '../models/app';
import ReferenceDataServiceInterface from './referenceDataServiceInterface';
import ReferenceDataClientInterface from '../referenceDataClientInterface';
import DeveloperMapper from '../mappers/developerMapper';
import AppMapper from '../mappers/appMapper';

class ReferenceDataServiceImpl implements ReferenceDataServiceInterface {

  constructor(
    private _referenceDataClient: ReferenceDataClientInterface,
    private _developerMapper: DeveloperMapper,
    private _appMapper: AppMapper,
  ) {}

  async getDeveloper(request: GetDeveloperRequest): Promise<Developer> {
    return new Promise<Developer>((resolve) => {
      this._referenceDataClient.getDeveloper(new GetDeveloperRequestDto(request.id))
        .then((dto) => {
          resolve(this._developerMapper.map(dto));
        })
        .catch(console.error);
    });
  }


  async getApp(request: GetAppRequest): Promise<App> {
    return new Promise<App>((resolve) => {
      this._referenceDataClient.getApp(new GetAppRequestDto(request.id))
        .then((dto) => {
          resolve(this._appMapper.map(dto));
        })
        .catch(console.error);
    });
  }
}
export default ReferenceDataServiceImpl;
