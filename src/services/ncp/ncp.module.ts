import { Module } from '@nestjs/common';
import { NcpClientModule } from '../../client/ncp/ncp.client.module';
import { BillingController } from './controller/billing.controller';
import { NcpController } from './controller/ncp.controller';

@Module({
  imports: [NcpClientModule],
  controllers: [NcpController, BillingController],
})
export class NcpModule {}
