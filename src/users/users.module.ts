import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './useCases/createUser/users.service';
import { UsersController } from './useCases/createUser/users.controller';
import { UserRepository } from './respositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
