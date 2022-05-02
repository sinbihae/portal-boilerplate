import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { UserAuth } from '../domain/user.auth';
import { NcpService } from '../../../client/ncp/service/ncp.service';
import { plainToInstance } from 'class-transformer';
import { JWT } from '../strategy/constants';

@Injectable()
export class CallbackService {
  constructor(
    private readonly ncpService: NcpService,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async login(req): Promise<any> {
    //네이버에서 받은 토큰정보
    let userAuth = plainToInstance(UserAuth, req.query);
    let naverToken = userAuth.token.replace(' ', '+');

    //네이버에서 받은 회원정보
    // let response = await this.ncpService.connect(NCLOUD_URL.PLATFORM_AUTH_NCLOUD, { token: token }).catch((e) => {
    //   console.log(`login failure by valid-token api, token:${token}`);
    // });

    //임시
    let response = {
      userId: 'hong',
      userName: '홍길동',
    };

    //Token 만들 기본 데이터
    let userInfo = {
      ...response,
      token: naverToken,
    };
    console.log(`login userAuth:${JSON.stringify(userInfo)}`);

    //Token 만들기
    const token = {
      access_token: this.jwtService.sign(userInfo, { privateKey: JWT.ACCESS_TOKEN_SECRET }),
      refresh_token: this.jwtService.sign(userInfo, { privateKey: JWT.REFRESH_TOKEN_SECRET }),
    };

    //cache 저장
    const id = uuidv4();
    await this.cacheManager.set(id, token, { ttl: 400 });

    return token;
  }
}
