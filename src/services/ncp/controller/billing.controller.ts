import { Controller, Get, Query } from '@nestjs/common';
import { BillingService } from '../../../client/ncp/service/billing.service';
import { BILLING_URL } from '../../../client/ncp/common/constants';

@Controller('ncp')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}
  @Get('getDemandCostList')
  async getNcpApi(@Query() input: any) {
    return await this.billingService.getDemandCostList(
      BILLING_URL.FIN_NCLOUD,
      {
        accessKey: process.env.NAVER_ACCESS_KEY,
        secretKey: process.env.NAVER_SECRET_KEY,
      },
      {
        ...input,
        isPartner: true,
        responseFormatType: 'json',
      }
    );
  }
}
