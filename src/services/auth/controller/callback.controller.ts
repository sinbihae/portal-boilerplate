import { Controller, Get, Redirect, Req, Session } from '@nestjs/common';
import { CallbackService } from '../service/callback.service';
import { Request } from 'express';

@Controller('/api/auth')
export class CallbackController {
  constructor(private callbackService: CallbackService) {}

  /**
   * 코스콤 포털 로그인 버튼 -> 네이버 Auth 로그인 화면 -> 코스콤 callback api
   * @param req
   * @param session
   */

  @Get('loginCallback')
  @Redirect('https://koscom.cloud', 302)
  async login(@Req() req: Request, @Session() session: Record<string, any>) {
    session.visits = session.visits ? session.visits + 1 : 1;
    const jwt = await this.callbackService.login(req);
    session.jwt = jwt;
    return { url: `https://koscom.cloud` };
  }

  @Get('loginCallbackConsole')
  async loginConsole(@Req() req, @Session() session: Record<string, any>) {
    console.log(session.visits);
    console.log(session.jwt);
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
