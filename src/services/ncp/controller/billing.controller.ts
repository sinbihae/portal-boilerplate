import { Controller, Get, Query, Req } from '@nestjs/common';
import { NCLOUD_URL } from '../../../client/ncp/common/constants';
import { NcpService } from '../../../client/ncp/service/ncp.service';
import { Request } from 'express';

@Controller('api/ncp')
export class BillingController {
  constructor(private readonly ncpService: NcpService) {}
  @Get('/billing/v1/cost/getDemandCostList')
  async getNcpApi(@Req() req: Request) {
    return await this.ncpService.connect(NCLOUD_URL.FIN_NCLOUD, req);
  }
}
