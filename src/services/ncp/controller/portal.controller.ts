import { Controller, Get, Post, Req } from '@nestjs/common';
import { NcpService } from '../../../client/ncp/service/ncp.service';
import { Request } from 'express';
import { NCLOUD_URL } from '../../../client/ncp/common/constants';

@Controller('api/ncp')
export class PortalController {
  constructor(private readonly ncpService: NcpService) {}

  /**
   * 네이버에서 발급한 Token 확인 API. 회원정보를 리턴
   * @param req
   */
  @Get('portal/v1/valid-token')
  async validToken(@Req() req: Request): Promise<any> {
    return await this.ncpService.connect(NCLOUD_URL.PLATFORM_AUTH_NCLOUD, req);
  }

  /**
   * 주소검색
   * @param req
   */
  @Get('portal/v1/join/address')
  async findAddress(@Req() req: Request): Promise<any> {
    return await this.ncpService.connect(NCLOUD_URL.PLATFORM_NCLOUD, req);
  }

  @Get('portal/v1/member/init')
  async memberInit(@Req() req: Request): Promise<any> {
    return await this.ncpService.connect(NCLOUD_URL.PLATFORM_NCLOUD, req);
  }

  @Get('portal/v1/member/auth/session/login')
  async login(@Req() req: Request): Promise<any> {
    return await this.ncpService.connect(NCLOUD_URL.PLATFORM_NCLOUD, req);
  }

  @Post('portal/v1/join/submit')
  async join(@Req() req: Request): Promise<any> {
    return await this.ncpService.connect(NCLOUD_URL.PLATFORM_NCLOUD, req);
  }
}
