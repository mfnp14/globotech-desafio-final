import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRestaurantDto } from 'src/restaurant/dto/create-restaurant.dto';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { RestaurantRepository } from 'src/restaurant/repositories/restaurant.repository';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(RestaurantRepository)
        private restaurantRepository: RestaurantRepository
    ){} 
    async createNewRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        if (createRestaurantDto.name === "" || createRestaurantDto.manager === "") {
            throw new HttpException(
                'Verifique se suas informações foram preenchidas corretamente',
                HttpStatus.UNPROCESSABLE_ENTITY,
            );
        } return this.restaurantRepository.createRestaurant(createRestaurantDto)
    }
}
