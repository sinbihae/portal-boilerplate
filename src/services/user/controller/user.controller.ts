import { Controller, Get, Query, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Query() input: any) {
    return await this.userService.users(input);
  }
}
