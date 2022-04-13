import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { RestaurantRepository } from 'src/restaurant/repositories/restaurant.repository';

@Injectable()
export class ListRestaurantService {
  constructor(
    @InjectRepository(RestaurantRepository)
    private restaurantRepository: RestaurantRepository,
  ) {}

  async listRestaurant(): Promise<Product> {
    const restaurants = await this.restaurantRepository.getListRestaurant();

    if (!restaurants) {
      throw new HttpException('', HttpStatus.NOT_FOUND);
    }
    return restaurants;
  }
}
