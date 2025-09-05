import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
        password: passwordHashed
      })

    }
    async getAllUser(): Promise<UserEntity []>{
        return this.userRepositor.find();
    }
}
