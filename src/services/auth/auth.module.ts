import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT } from './strategy/constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      // secret: JWT.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: JWT.EXPIRES },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
