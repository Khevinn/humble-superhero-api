import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class SuperheroDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  superpower: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
