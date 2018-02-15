import { 
  GetDeveloperRequestDto, 
  GetAppRequestDto, 
  DeveloperDto, 
  AppDto,
} from './dtos/readServices/referenceDataDtos';

interface ReferenceDataClientInterface {
  getDeveloper(request: GetDeveloperRequestDto): Promise<DeveloperDto>;
  getApp(request: GetAppRequestDto): Promise<AppDto>;
}
export default ReferenceDataClientInterface;
