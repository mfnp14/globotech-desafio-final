import { Module } from '@nestjs/common';
import { UsersService } from './useCases/createUser/users.service';
import { UsersController } from './useCases/createUser/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
