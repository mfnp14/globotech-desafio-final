import { Module } from '@nestjs/common';
import { RestaurantService } from './useCases/createRestaurant/restaurant.service';
import { RestaurantController } from './useCases/createRestaurant/restaurant.controller';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule {}
