import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ServerService } from './service/server.service';
import { BillingService } from './service/billing.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }), //HTTP 모듈 설정
  ],
  providers: [ServerService, BillingService],
  exports: [ServerService, BillingService],
})
export class NcpClientModule {}
