import { ProductDto, AuthorDto } from '../../../common/dtos/readServices/referenceDataDtos';
import Product from '../models/product';
import Developer from '../../../common/models/developer';

class ProductMapper {

  toDto(product: Product): ProductDto {
    return new ProductDto(
      product.app.id,
      new AuthorDto(
        product.developer.name,
        product.developer.url, 
      ),
      product.app.title,
      product.app.version,
      product.app.url,
      product.app.shortDescription,
      product.app.license,
      product.app.thumbnail,
      product.app.rating,
      product.app.totalDownloads,
      product.app.compatible,
    );
  }
}
export default ProductMapper;
