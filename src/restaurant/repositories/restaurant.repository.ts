import { EntityRepository, Repository } from 'typeorm';
import { CreateRestaurantDto } from './../dto/create-restaurant.dto';
import { Restaurant } from '../entities/restaurant.entity';

@EntityRepository(Restaurant)
export class RestaurantRepository extends Repository<Restaurant> {
  async createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const { name, address, description, logoUrl, manager } = createRestaurantDto;

    const restaurant = this.create({
      name,
      address,
      description,
      logoUrl,
      manager,
      createdDate: new Date(),
      updatedDate: new Date(),
    });

    return await this.save(restaurant);
  }
}
