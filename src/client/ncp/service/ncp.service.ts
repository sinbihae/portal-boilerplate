import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import { map } from 'rxjs';
import { Method } from 'axios';

class AxiosResponse<T> {}

//HTTP 모듈 설정
@Injectable()
export class NcpService {
  private logger: Logger = new Logger(NcpService.name);

  constructor(private httpService: HttpService) {}

  async connect(req): Promise<any> {
    let host = 'https://mle9v7uqkt.apigw.fin-ntruss.com/';
    let url: String = req.url.repace('/api/ncp', '');
    let header = req.headers;
    let method: Method = req.method;
    let body = req.body;

    console.log(url);
    console.log(header);
    console.log(method);
    // console.log(body);

    return this.httpService
      .request({
        url: 'https://mle9v7uqkt.apigw.fin-ntruss.com/portal/v1/join/address?keyword=%EC%97%AC%EC%9D%98%EB%8F%84',
        headers: { 'X-NCP-APIGW-API-KEY': 'A5Ra80k0N084OLeKSU9O1WFfrHMIZpZZt8p8zIRT' },
        method: method,
      })
      .pipe(map((response) => response.data))
      .toPromise();

    // return this.httpService
    //   .get('https://mle9v7uqkt.apigw.fin-ntruss.com/portal/v1/join/address?keyword=%EC%97%AC%EC%9D%98%EB%8F%84', {
    //     headers: {
    //       'X-NCP-APIGW-API-KEY': 'A5Ra80k0N084OLeKSU9O1WFfrHMIZpZZt8p8zIRT',
    //     },
    //   })
    //   .pipe(map((response) => response.data))
    //   .toPromise();
  }
}
