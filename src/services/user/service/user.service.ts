import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async users(input: any) {
    return '사용자 조회';
  }
}
