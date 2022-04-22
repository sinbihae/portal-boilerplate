import { Controller, Get, Req } from '@nestjs/common';
import { NcpService } from '../../../client/ncp/service/ncp.service';
import { Request } from 'express';

@Controller('ncp/api')
export class NcpController {
  constructor(private readonly ncpService: NcpService) {}

  @Get('portal/v1/join/address')
  async getNcpApi(@Req() req: Request) {
    return await this.ncpService.connect(req);
  }
}
