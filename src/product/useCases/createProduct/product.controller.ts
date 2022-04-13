import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { ReturnProductDto } from 'src/product/dto/return-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  async createNewProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ReturnProductDto> {
    await this.productService.createNewProduct(createProductDto);

    return {
      message: 'Produto cadastrado com sucesso',
    };
  }
}
