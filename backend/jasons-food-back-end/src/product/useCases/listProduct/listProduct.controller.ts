import { ListProductService } from './listProduct.service';
import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ListProductController {
  constructor(private readonly listProductService: ListProductService) {}

  @Get()
  async listProduct() {
    return await this.listProductService.listProduct();
  }
}
