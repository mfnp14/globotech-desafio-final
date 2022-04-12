import { CreateUserDto } from './../dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, confirmPassword } = createUserDto;

    const user = this.create({
      name,
      email,
      password,
      confirmPassword,
      createdDate: new Date(),
      updatedDate: new Date(),
    });

    return await this.save(user);
  }
}
