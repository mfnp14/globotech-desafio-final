import { CreateUserDto } from '../../dto/create-user.dto';
import { UserRepository } from '../../respositories/user.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createNewUser(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.confirmPassword) {
      throw new HttpException(
        'Verifique se suas informações foram preenchidas corretamente',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return this.userRepository.createUser(createUserDto);
  }
}
