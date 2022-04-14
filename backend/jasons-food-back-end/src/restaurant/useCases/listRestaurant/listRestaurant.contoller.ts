import { Controller, Get } from '@nestjs/common';
import { ListRestaurantService } from './listRestaurant.service';

@Controller('restaurant')
export class ListRestaurantController {
  constructor(private readonly listRestaurantService: ListRestaurantService) {}

  @Get()
  async listRestaurant() {
    return await this.listRestaurantService.listRestaurant();
  }
}
