import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { ReturnProductDto } from 'src/product/dto/return-product.dto';
import { CreateProductService } from './createProduct.service';

@Controller('product')
export class CreateProductController {
  constructor(private readonly productService: CreateProductService) {}

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
