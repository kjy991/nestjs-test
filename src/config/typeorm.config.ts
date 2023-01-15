import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'yeopking',
  password: '0008',
  database: 'test-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};