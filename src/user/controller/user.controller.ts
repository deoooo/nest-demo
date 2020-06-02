import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/user')
export class UserController {
  constructor (
    private userService: UserService,
  ) {}

  @Get()
  async findAll () {
    return this.userService.findAll();
  }

  @Post()
  async create () {
    return this.userService.create();
  }
}
