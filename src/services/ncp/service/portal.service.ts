import { Get, Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
import { NCLOUD_URL } from '../../../client/ncp/common/constants';
import { NcpService } from '../../../client/ncp/service/ncp.service';

@Injectable()
export class PortalService {
  constructor(private readonly ncpService: NcpService) {}
  /**
   * 네이버에서 발급한 Token 확인 API. 회원정보를 리턴
   * @param req
   */
  async validToken(@Req() req: Request): Promise<any> {
    return await this.ncpService.connect(NCLOUD_URL.PLATFORM_AUTH_NCLOUD, req);
  }
}
