import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductRepository } from './repositories/Product.repository';
import { ListProductController } from './useCases/listProduct/listProduct.controller';
import { CreateProductController } from './useCases/createProduct/createProduct.controller';
import { CreateProductService } from './useCases/createProduct/createProduct.service';
import { ListProductService } from './useCases/listProduct/listProduct.service';
import { Extra } from './entities/extra.entity';
import { ExtraRepository } from './repositories/Extra.repository';
import { CreateExtraController } from './useCases/createExtra/createExtra.controller';
import { CreateExtraService } from './useCases/createExtra/createExtra.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Extra,
      ProductRepository,
      ExtraRepository,
    ]),
  ],
  controllers: [
    CreateProductController,
    CreateExtraController,
    ListProductController,
  ],
  providers: [CreateProductService, CreateExtraService, ListProductService],
})
export class ProductModule {}
