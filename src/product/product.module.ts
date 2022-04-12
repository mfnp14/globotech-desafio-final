import { Module } from '@nestjs/common';
import { ProductService } from './useCases/createProduct/product.service';
import { ProductController } from './useCases/createProduct/product.controller';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
