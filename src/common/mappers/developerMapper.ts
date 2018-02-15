import { DeveloperDto } from '../dtos/readServices/referenceDataDtos';
import Developer from '../models/developer';

class DeveloperMapper {

  map(dto: DeveloperDto): Developer {
    return new Developer(
      dto.id,
      dto.name ? dto.name : 'Anonymous', // TODO: Needs to be i18n
      dto.url,
    );
  }
}
export default DeveloperMapper;
