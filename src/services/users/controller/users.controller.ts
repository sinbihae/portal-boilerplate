import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(@Param() params) {
    return await this.usersService.findAll();
  }

  @Get('/:username')
  async getUser(@Param() params) {
    return await this.usersService.findOne(params.username);
  }

  @Post()
  async createUser(@Req() req) {
    return req.body;
  }
}
