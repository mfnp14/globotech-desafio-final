import { CreateUserDto } from './../../dto/create-user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ReturnUserDto } from 'src/users/dto/return-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
