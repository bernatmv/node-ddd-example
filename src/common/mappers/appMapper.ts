import { AppDto } from '../dtos/readServices/referenceDataDtos';
import App from '../models/app';

class AppMapper {

  map(dto: AppDto): App {
    return new App(
      dto.id,
      dto.developer_id,
      dto.title,
      dto.version,
      dto.url,
      dto.short_description,
      dto.license,
      dto.thumbnail,
      dto.rating,
      dto.total_downloads,
      dto.compatible,
    );
  }
}
export default AppMapper;
