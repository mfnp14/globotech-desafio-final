import { EntityRepository, Repository } from 'typeorm';
import { CreateRestaurantDto } from './../dto/create-restaurant.dto';
import { Restaurant } from '../entities/restaurant.entity';

@EntityRepository(Restaurant)
export class RestaurantRepository extends Repository<Restaurant> {
  async createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const { name, address, description, logoUrl, manager } =
      createRestaurantDto;

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

  async getListRestaurant(): Promise<any> {
    const queryGetRestaurants = await this.createQueryBuilder('restaurant')
      .select([
        'restaurant.id',
        'restaurant.name',
        'restaurant.address',
        'restaurant.description',
        'restaurant.logoUrl',
        'restaurant.manager',
        'product.name',
        'product.urlImage',
        'product.description',
        'product.price',
      ])
      .leftJoinAndSelect('restaurant.products', 'product')
      .getOne();

    const response = {
      restaurante: queryGetRestaurants,
    };

    return [response];
  }
}
