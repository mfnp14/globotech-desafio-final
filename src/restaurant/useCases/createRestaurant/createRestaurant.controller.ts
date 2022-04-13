import { Body, Controller, Post } from '@nestjs/common';
import { CreateRestaurantDto } from '../../dto/create-restaurant.dto';
import { ReturnRestaurantDto } from '../../dto/return-restaurant.dto';
import { CreateRestaurantService } from './createRestaurant.service';

@Controller('restaurant')
export class CreateRestaurantController {
  constructor(private readonly restaurantService: CreateRestaurantService) {}

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
