import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NcpService } from './service/ncp.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }), //HTTP 모듈 설정
  ],
  providers: [NcpService],
  exports: [NcpService],
})
export class NcpClientModule {}
