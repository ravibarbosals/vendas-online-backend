import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepositor: Repository<UserEntity>,
  ) {}

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity > {
      const saltOrRounds = 10;

      const passwordHashed = await hash(createUserDto.password, saltOrRounds);

      return this.userRepositor.save({
        ...createUserDto,
        typeUser: 1,
        password: passwordHashed
      })

    }
    async getAllUser(): Promise<UserEntity []>{
        return this.userRepositor.find();
    }
}
