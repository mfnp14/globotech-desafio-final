import { Module } from '@nestjs/common';
import { RestaurantService } from './useCases/createRestaurant/restaurant.service';
import { RestaurantController } from './useCases/createRestaurant/restaurant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantRepository } from './repositories/restaurant.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, RestaurantRepository])],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule {}
