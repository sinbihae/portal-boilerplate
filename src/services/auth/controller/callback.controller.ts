import { Controller, Get, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CallbackService } from '../service/callback.service';
import { UserAuth } from '../domain/user.auth';
import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';

@Controller('/api/auth')
export class CallbackController {
  constructor(private callbackService: CallbackService) {}

  /**
   * 코스콤 포털 로그인 버튼 -> 네이버 Auth 로그인 화면 -> 코스콤 callback api
   * @param req
   */
  @Get('loginCallback')
  async login(@Req() req: Request, @Res() res: Response) {
    await this.callbackService.login(req);
    return 'login_callback';
    // return res.redirect('/');
  }

  @Get('loginCallbackConsole')
  async loginConsole(@Req() req) {
    //Todo.
    return 'login_callback_console';
  }

  @Get('loginCallbackSubaccount')
  async loginSubaccount(@Req() req) {
    //Todo.
    return 'login_callback_subaccount';
  }

  @Get('logoutCallback')
  async logoutCallback(@Req() req) {
    //Todo.
    return 'logout_callback';
  }
}
