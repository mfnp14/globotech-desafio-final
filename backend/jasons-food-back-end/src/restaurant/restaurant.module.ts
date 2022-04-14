import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantRepository } from './repositories/restaurant.repository';
import { CreateRestaurantService } from './useCases/createRestaurant/createRestaurant.service';
import { CreateRestaurantController } from './useCases/createRestaurant/createRestaurant.controller';
import { ListRestaurantController } from './useCases/listRestaurant/listRestaurant.contoller';
import { ListRestaurantService } from './useCases/listRestaurant/listRestaurant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, RestaurantRepository])],
  controllers: [CreateRestaurantController, ListRestaurantController],
  providers: [CreateRestaurantService, ListRestaurantService],
})
export class RestaurantModule {}
