import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor (
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll (): Promise<User[]> {
    return this.userRepository.find();
  }

  async create () {
    const u = new User();
    u.description = 'this is description';
    u.name = 'deooo';
    const res = await this.userRepository.insert(u);
    return res
  }
}
