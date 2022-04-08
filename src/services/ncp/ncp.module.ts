import { Module } from '@nestjs/common';
import { NcpClientModule } from '../../client/ncp/ncp.client.module';
import { BillingController } from './controller/billing.controller';

@Module({
  imports: [NcpClientModule],
  controllers: [BillingController],
})
export class NcpModule {}
