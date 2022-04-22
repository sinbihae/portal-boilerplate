import { Controller, Get, Post, Req } from '@nestjs/common';
import { NcpService } from '../../../client/ncp/service/ncp.service';
import { Request } from 'express';
import { NCLOUD_URL } from '../../../client/ncp/common/constants';

@Controller('api/ncp')
export class PortalController {
  constructor(private readonly ncpService: NcpService) {}

  /**
   * 주소검색
   * @param req
   */
  @Get('portal/v1/join/address')
  async findAddress(@Req() req: Request) {
    return await this.ncpService.connect(NCLOUD_URL.PLATROM_NCLOUD, req);
  }

  @Get('portal/v1/member/init')
  async memberInit(@Req() req: Request) {
    return await this.ncpService.connect(NCLOUD_URL.PLATROM_NCLOUD, req);
  }

  @Get('portal/v1/member/auth/session/login')
  async login(@Req() req: Request) {
    return await this.ncpService.connect(NCLOUD_URL.PLATROM_NCLOUD, req);
  }

  @Post('portal/v1/join/submit')
  async join(@Req() req: Request) {
    return await this.ncpService.connect(NCLOUD_URL.PLATROM_NCLOUD, req);
  }
}
