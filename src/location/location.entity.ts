/* eslint-disable prettier/prettier */
// This entity file is resposible for the database schema.....
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sender {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  Address: string;

  @ApiProperty()
  @Column("text")
  Description: string;

  @ApiProperty()
  @Column()
  Phone: string;

  @ApiProperty()
  @Column()
  Contact_Person: string;

  @ApiProperty()
  // @Column("double precision")
  @Column()
  longitude: string;

  @ApiProperty()
  // @Column("double precision")
  @Column()
  latitude: string;
}
