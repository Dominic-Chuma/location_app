import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Sender } from './location.entity';

@Injectable()
export class LocationService extends TypeOrmCrudService<Sender> {
  constructor(@InjectRepository(Sender) repo) {
    super(repo);
  }
}
