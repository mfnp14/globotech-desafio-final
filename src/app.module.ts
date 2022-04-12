import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, RestaurantModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
