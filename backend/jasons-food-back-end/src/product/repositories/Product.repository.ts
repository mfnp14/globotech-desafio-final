import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async createProduct(createProductDto: CreateProductDto): Promise<any> {
    const { name, idRestaurant, urlImage, description, price } =
      createProductDto;

    const product = this.create([
      {
        name,
        idRestaurant,
        urlImage,
        description,
        price,
        createdDate: new Date(),
        updatedDate: new Date(),
      },
    ]);

    return await this.save(product);
  }

  async getListProducts(): Promise<any> {
    const queryGetProducts = await this.createQueryBuilder('product')
      .select([
        'product.id',
        'product.urlImage',
        'product.name',
        'product.description',
        'product.price',
      ])
      .getMany();

    return queryGetProducts;
  }
}
