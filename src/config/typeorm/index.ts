import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { getMetadataArgsStorage } from 'typeorm';
import { TYPEORM } from '../../environments';

//Typeorm 설정
@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> {
    return {
      ...TYPEORM,
      type: 'mysql',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      synchronize: false,
      autoLoadEntities: true,
      keepConnectionAlive: true,
      logging: false,
      logger: 'simple-console',
    };
  }
}
