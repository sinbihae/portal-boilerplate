import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { JwtGuard } from '../guards/jwt.guard';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Get('loginCallback')
  async login(@Req() req) {
    //Todo.
    return 'login_callback';
  }

  @UseGuards(AuthGuard('local'))
  @Get('loginCallbackConsole')
  async loginConsole(@Req() req) {
    //Todo.
    return 'login_callback_console';
  }

  @UseGuards(AuthGuard('local'))
  @Get('loginCallbackSubaccount')
  async loginSubaccount(@Req() req) {
    //Todo.
    return 'login_callback_subaccount';
  }

  @UseGuards(AuthGuard('local'))
  @Get('logoutCallback')
  async logoutCallback(@Req() req) {
    //Todo.
    return 'logout_callback';
  }
}
