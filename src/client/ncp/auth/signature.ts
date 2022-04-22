import * as CryptoJS from 'crypto-js';
/**
 * 네이커 클라우드 인증키 생성하기
 *
 * NAVER Cloud Platform 계정이 생성되면 기본적으로 NAVER Cloud Platform API 인증키가 한개 발급됩니다.
 * 발급된 인증키는 포털의 [마이페이지] > [계정관리] > [인증키관리] 에서 확인할 수 있습니다.
 * 인증키는 계정 생성 시 자동으로 발급되는 것 외에 사용자가 하나 더 생성할 수 있어서 두 개까지 발급받을 수 있습니다.
 *
 * API 인증키는 Access Key와 Secret Key 한 쌍으로 구성되어 있습니다.
 * 한 쌍의 API 인증키는 API를 인증할 때 파라미터로 직접 전달됩니다.
 *
 * # 인증 헤더 파라미터
 * - x-ncp-apigw-timestamp
 * 1970년 1월 1일 00:00:00 협정 세계시(UTC)부터의 경과 시간을 밀리초(Millisecond)로 나타낸 것이다.
 * APIGW 서버와 시간차가 5분 이상 나는 경우 유효하지 않은 요청으로 간주
 *
 * - x-ncp-iam-access-key
 * 네이버 클라우드 플랫폼 홈페이지 또는 sub account에서 발급받은 Access Key ID
 *
 * - x-ncp-apigw-auth-v2
 * 위 예제의 Body를 Access Key ID와 맵핑되는 Secret Key로 암호화한 서명
 * HMAC 암호화 알고리즘은 HmacSHA256 사용
 *
 * @param url
 * @param method
 * @param accessKey
 * @param secretKey
 * @param query
 */
export const NEW_LINE = '\n';

export function makeNaverCloudSignature(
  url: string,
  method: string,
  accessKey: string,
  secretKey: string,
  query?: string
) {
  const timestamp = ~~(Date.now() / 1000) * 1000;

  return {
    'x-ncp-apigw-timestamp': timestamp.toString(),
    'x-ncp-iam-access-key': accessKey,
    'x-ncp-apigw-signature-v2': generateSignature(accessKey, secretKey, {
      method: method.toUpperCase(),
      url: url,
      // url: url + (query !== undefined ? '?' + query : ''),
      timestamp: timestamp.toString(),
    }),
  };
}

function generateSignature(accessKey: string, secretKey: string, options: RequestOptions) {
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(propertyMessage(options) + accessKey);

  let hash = hmac.finalize();
  return hash.toString(CryptoJS.enc.Base64);
}

interface RequestOptions {
  method: string;
  url: string;
  timestamp: string;
}

function propertyMessage(options: RequestOptions): string {
  return options.method + ' ' + options.url + NEW_LINE + options.timestamp + NEW_LINE;
}
