import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { ProductRepository } from 'src/product/repositories/Product.repository';

@Injectable()
export class ListProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async listProduct(): Promise<Product> {
    const products = await this.productRepository.getListProducts();

    if (!products) {
      throw new HttpException('', HttpStatus.NOT_FOUND);
    }
    return products;
  }
}
