import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './config/typeorm';
import { NcpClientModule } from './client/ncp/ncp.client.module';
import { NcpModule } from './services/ncp/ncp.module';
import { AuthModule } from './services/auth/auth.module';
import { UsersModule } from './services/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './config/jwt';
// import * as redisStore from 'cache-manager-redis-store';
import { REDIS_HOST } from './environments';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }), //Typeorm 설정
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }), //JWT 설정
    CacheModule.register({
      // store: redisStore,
      host: REDIS_HOST,
      port: 6379,
    }),
    NcpClientModule, //NCP 클라이어트 모듈 설정

    //Controller
    NcpModule, //NCP API 모듈 설정
    AuthModule, //인증 모듈
    UsersModule, //회원 모듈
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
