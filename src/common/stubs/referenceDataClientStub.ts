import { GetDeveloperRequestDto, DeveloperDto, GetAppRequestDto, AppDto } from '../dtos/readServices/referenceDataDtos';
import ReferenceDataClientInterface from '../referenceDataClientInterface';

class ReferenceDataClientStub implements ReferenceDataClientInterface {

  constructor(
  ) {}

  getDeveloper(request: GetDeveloperRequestDto): Promise<DeveloperDto> {
    return new Promise<DeveloperDto>((resolve) => {
      resolve({
        id: 23,
        name: 'AresGalaxy',
        url: 'https://aresgalaxy.io/',
      });
    });
  }


  getApp(request: GetAppRequestDto): Promise<AppDto> {
    return new Promise<AppDto>((resolve) => {
      resolve({
        id: 21824,
        developer_id: 23,
        title: 'Ares',
        version: '2.4.0',
        url: 'http://ares.en.softonic.com',
        short_description: 'Fast and unlimited P2P file sharing',
        license: 'Free (GPL)',
        thumbnail: 'https://screenshots.en.sftcdn.net/en/scrn/21000/21824/ares-14-100x100.png',
        rating: 8,
        total_downloads: '4741260',
        compatible: [
          'Windows 2000',
          'Windows XP',
          'Windows Vista',
          'Windows 7',
          'Windows 8',
        ],
      });
    });
  }
}
export default ReferenceDataClientStub;
