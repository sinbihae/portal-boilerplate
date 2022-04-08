import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

class AxiosResponse<T> {}

//HTTP 모듈 설정
@Injectable()
export class ServerService {
  private logger: Logger = new Logger(ServerService.name);

  constructor(private httpService: HttpService) {}

  async findAll(): Promise<any> {
    return this.httpService
      .get('https://mle9v7uqkt.apigw.fin-ntruss.com/portal/v1/join/address?keyword=%EC%97%AC%EC%9D%98%EB%8F%84', {
        headers: {
          'X-NCP-APIGW-API-KEY': 'A5Ra80k0N084OLeKSU9O1WFfrHMIZpZZt8p8zIRT',
        },
      })
      .pipe(map((response) => response.data))
      .toPromise();
  }
}
