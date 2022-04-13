import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductService } from './useCases/createProduct/product.service';
import { ProductController } from './useCases/createProduct/product.controller';
import { Product } from './entities/product.entity';
import { ProductRepository } from './repositories/createProduct.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductRepository])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
