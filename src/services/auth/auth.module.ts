import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT } from './strategy/constants';
import { CallbackController } from './controller/callback.controller';
import { CallbackService } from './service/callback.service';
import { NcpModule } from '../ncp/ncp.module';
import { NcpClientModule } from '../../client/ncp/ncp.client.module';

@Module({
  imports: [
    NcpClientModule,
    NcpModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      // secret: JWT.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: JWT.EXPIRES },
    }),
  ],
  providers: [AuthService, CallbackService, LocalStrategy, JwtStrategy],
  exports: [LocalStrategy, JwtStrategy],
  controllers: [AuthController, CallbackController],
})
export class AuthModule {}
