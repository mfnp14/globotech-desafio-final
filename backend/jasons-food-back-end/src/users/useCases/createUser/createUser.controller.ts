import { CreateUserService } from './createUser.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ReturnUserDto } from 'src/users/dto/return-user.dto';

@Controller('users')
export class CreateUserController {
  constructor(private readonly usersService: CreateUserService) {}

  @Post()
  async createNewUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    await this.usersService.createNewUser(createUserDto);

    return {
      message: 'Usuário cadastrado com sucesso',
    };
  }
}
