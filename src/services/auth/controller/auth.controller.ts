import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { JwtGuard } from '../guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //ID/PWD로 로그인해서 그냥 사용자 정보 전달
  @UseGuards(AuthGuard('local'))
  @Post('localLogin')
  async localLogin(@Req() req) {
    return req.user;
  }

  //ID/PWD로 로그인해서 JWT Token으로 사용자 정보 전달
  @UseGuards(AuthGuard('local'))
  @Post('jwtLogin')
  async jwtLogin(@Req() req) {
    return await this.authService.login(req.user);
  }

  //JWT Token으로 인증하고 접근을 허용
  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(JwtGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    return req.user;
  }

  /**
   * 인증정보 가져오기
   * @param req
   */
  @UseGuards(AuthGuard('local'))
  @Get('info')
  async getInfo(@Req() req) {
    return await this.authService.login(req.user);
  }
}
