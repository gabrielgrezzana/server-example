import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @isString()
  password: string;

  @ApiProperty()
  @isString()
  cpf: string;

  @ApiProperty()
  @isString()
  role: string;
}
