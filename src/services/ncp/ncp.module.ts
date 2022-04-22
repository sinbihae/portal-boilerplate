import { Module } from '@nestjs/common';
import { NcpClientModule } from '../../client/ncp/ncp.client.module';
import { BillingController } from './controller/billing.controller';
import { PortalController } from './controller/portal.controller';

@Module({
  imports: [NcpClientModule],
  controllers: [PortalController, BillingController],
})
export class NcpModule {}
