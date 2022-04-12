import { Body, Controller, Post } from '@nestjs/common';
import { CreateRestaurantDto } from '../../../restaurant/dto/create-restaurant.dto';
import { ReturnRestaurantDto } from '../../../restaurant/dto/return-restaurant.dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async createNewRestaurant(
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<ReturnRestaurantDto> {
    await this.restaurantService.createNewRestaurant(createRestaurantDto);

    return {
      message: 'Restaurante cadastrado com sucesso',
    };
  }
}
