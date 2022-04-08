import { HttpException, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { SecretInterface } from '../auth/secret.interface';
import { makeNaverCloudSignature } from '../auth/signature';
import * as qs from 'qs';
import { BILLING_URL, BILLING_URL_PATH, GET_DEMAND_COST_LIST_URL_PATH } from '../common/constants';

class AxiosResponse<T> {}

//HTTP 모듈 설정
@Injectable()
export class BillingService {
  private logger: Logger = new Logger(BillingService.name);

  constructor(private httpService: HttpService) {}

  async getDemandCostList(
    url: string | BILLING_URL = BILLING_URL.FIN_NCLOUD,
    secret: SecretInterface,
    input: any
  ): Promise<any> {
    const query = qs.stringify(input);

    return this.httpService
      .get(url + BILLING_URL_PATH + GET_DEMAND_COST_LIST_URL_PATH + '?' + query, {
        headers: {
          ...makeNaverCloudSignature(
            BILLING_URL_PATH + GET_DEMAND_COST_LIST_URL_PATH,
            'GET',
            secret.accessKey,
            secret.secretKey,
            query
          ),
        },
      })
      .pipe()
      .toPromise()
      .catch((e) => {
        throw new HttpException(e.response.data, e.response.status);
      });
  }
}
