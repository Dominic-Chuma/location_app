import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'sqlite',
      // database: ':memory:',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      // synchronize: true,
      type: 'postgres',
      username: 'postgres',
      password: 'ded1#',
      port: 6666,
      host: '127.0.0.1',
      database: 'location_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      // autoLoadEntities: true,
    }),
    LocationModule,
  ],
})
export class AppModule {}
// export class TypeOrmModule {}
