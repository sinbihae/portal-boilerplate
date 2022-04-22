import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import { JWT } from '../strategy/constants';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    //Todo. 네이버에서 인증 후 회원정보를 조회한다.
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    //Todo. User 정보를 담아야한다.

    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload, { privateKey: JWT.ACCESS_TOKEN_SECRET }),
      refresh_token: this.jwtService.sign(payload, { privateKey: JWT.REFRESH_TOKEN_SECRET }),
    };
  }
}
