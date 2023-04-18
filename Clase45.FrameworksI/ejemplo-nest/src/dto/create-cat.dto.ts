import { ApiProperty } from '@nestjs/swagger';

export default class CreateCatDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly breed: string;
}
