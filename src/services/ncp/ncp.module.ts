import { Module } from '@nestjs/common';
import { NcpClientModule } from '../../client/ncp/ncp.client.module';
import { BillingController } from './controller/billing.controller';
import { PortalController } from './controller/portal.controller';
import { PortalService } from './service/portal.service';

@Module({
  imports: [NcpClientModule],
  providers: [PortalService],
  controllers: [PortalController, BillingController],
})
export class NcpModule {}
