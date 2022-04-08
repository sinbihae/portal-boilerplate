import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { v4 as uuidv4 } from 'uuid';

//Logging 설정
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const requestId = uuidv4();
    Logger.debug(`[${context.getClass().name}] RequestId: ${requestId}`);

    return next.handle().pipe(
      tap((val: unknown): void => {
        Logger.debug(`[${context.getClass().name}] RequestId: ${requestId} - ${val}`);
      })
    );
  }
}
