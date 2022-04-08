import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './config';
import { UserModule } from './services/user/user.module';
import { NcpClientModule } from './client/ncp/ncp.client.module';
import { NcpModule } from './services/ncp/ncp.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }), //Typeorm 설정
    NcpClientModule, //NCP 클라이어트 모듈 설정

    //Controller
    NcpModule, //NCP API 모듈 설정
    UserModule, //일반 모듈 설정
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
