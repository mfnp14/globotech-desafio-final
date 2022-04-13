import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { Product } from 'src/product/entities/product.entity';
import { ProductRepository } from 'src/product/repositories/createProduct.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}
  async createNewProduct(createProductDto: CreateProductDto): Promise<Product> {
    if (createProductDto.name === '' || createProductDto.price === null) {
      throw new HttpException(
        'Verifique se suas informações foram preenchidas corretamente',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return this.productRepository.createProduct(createProductDto);
  }
}
