import { HttpException, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { Method } from 'axios';
import { makeNaverCloudSignature } from '../auth/signature';

class AxiosResponse<T> {}

//HTTP 모듈 설정
@Injectable()
export class NcpService {
  private logger: Logger = new Logger(NcpService.name);

  constructor(private httpService: HttpService) {}

  async connect(host, req?): Promise<any> {
    let url = String(req.url).replace('/api/ncp', '');

    let header = {
      //api키 일때
      'X-NCP-APIGW-API-KEY': process.env.API_KEY,
      //access_key 일때
      ...makeNaverCloudSignature(url, req.method, process.env.NAVER_ACCESS_KEY, process.env.NAVER_SECRET_KEY, req.quer),
    };

    return this.httpService
      .request({
        url: `${host}${url}`,
        headers: header,
        method: req.method,
        data: req.body,
      })
      .pipe(
        map((response) => response.data),
        catchError((e) => {
          console.log(e.request.url);
          console.log(e.response.data);
          throw new HttpException(e.response.data, e.response.status);
        })
      )

      .toPromise();
  }
}
