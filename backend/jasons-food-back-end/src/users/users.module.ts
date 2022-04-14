import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreateUserService } from './useCases/createUser/createUser.service';
import { CreateUserController } from './useCases/createUser/createUser.controller';
import { UserRepository } from './respositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [CreateUserController],
  providers: [CreateUserService],
})
export class UsersModule {}
