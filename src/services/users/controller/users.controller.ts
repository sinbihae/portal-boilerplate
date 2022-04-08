import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:username')
  async getUser(@Param() params) {
    return await this.usersService.findOne(params.username);
  }
}
