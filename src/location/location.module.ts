import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from './location.controller';
import { Sender } from './location.entity';
import { LocationService } from './location.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sender])],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
