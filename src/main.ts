import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConnection } from 'typeorm';
import { Logger } from '@nestjs/common';
import { LoggingInterceptor } from './core/interceptoers/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(), //Logger 설정
  });

  //Typeorm 설정
  const connection = getConnection('default');
  const { isConnected } = connection;
  isConnected ? Logger.log(`Database connected success`, 'TypeORM') : Logger.error(`Database connect error`, 'TypeORM');

  //Logging 설정
  app.useGlobalInterceptors(new LoggingInterceptor());

  //Port 설정
  await app.listen(process.env.PORT);
}
bootstrap();
