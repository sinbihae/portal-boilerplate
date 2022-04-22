import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ServerService } from './service/server.service';
import { BillingService } from './service/billing.service';
import { NcpService } from './service/ncp.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }), //HTTP 모듈 설정
  ],
  providers: [NcpService, ServerService, BillingService],
  exports: [NcpService, ServerService, BillingService],
})
export class NcpClientModule {}
