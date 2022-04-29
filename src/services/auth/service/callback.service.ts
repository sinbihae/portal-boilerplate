import { Injectable } from '@nestjs/common';
import { UserAuth } from '../domain/user.auth';
import { NcpService } from '../../../client/ncp/service/ncp.service';
import { NCLOUD_URL } from '../../../client/ncp/common/constants';
import { plainToInstance } from 'class-transformer';
import { JWT } from '../strategy/constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CallbackService {
  constructor(private readonly ncpService: NcpService, private jwtService: JwtService) {}

  async login(req): Promise<any> {
    //네이버에서 받은 토큰정보
    let userAuth = plainToInstance(UserAuth, req.query);
    let token = userAuth.token.replace(' ', '+');

    //네이버에서 받은 회원정보
    let response = await this.ncpService.connect(NCLOUD_URL.PLATFORM_AUTH_NCLOUD, { token: token }).catch((e) => {
      console.log(`login failure by valid-token api, token:${token}`);
    });

    //임시
    response = {
      userId: 'hong',
      userName: '홍길동',
    };

    //Token 만들 기본 데이터
    let userInfo = {
      ...response,
      token: token,
    };
    console.log(`login userAuth:${JSON.stringify(userInfo)}`);

    //Token 만들기
    let authResult = {
      access_token: this.jwtService.sign(userInfo, { privateKey: JWT.ACCESS_TOKEN_SECRET }),
      refresh_token: this.jwtService.sign(userInfo, { privateKey: JWT.REFRESH_TOKEN_SECRET }),
    };

    // const setToken = await this.cacheManager.set(, new AccessTokenEntity({ accessToken: accessToken }), {
    //   ttl: 40000,
    // })
    //Cache에 저장

    //Todo.
    // Collection<GrantedAuthority> authorities = new ArrayList<>();
    // authorities.add(new SimpleGrantedAuthority("USER"));
    // SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(userAuth.getToken(), userInfo, authorities));
  }
}
