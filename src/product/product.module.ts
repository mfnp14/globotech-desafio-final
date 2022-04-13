import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductRepository } from './repositories/Product.repository';
import { ListProductController } from './useCases/listProduct/listProduct.controller';
import { CreateProductController } from './useCases/createProduct/createProduct.controller';
import { CreateProductService } from './useCases/createProduct/createProduct.service';
import { ListProductService } from './useCases/listProduct/listProduct.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
  controllers: [CreateProductController, ListProductController],
  providers: [CreateProductService, ListProductService],
})
export class ProductModule {}
