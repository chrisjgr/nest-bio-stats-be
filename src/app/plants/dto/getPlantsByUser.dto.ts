import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class GetPlantsByUserIdDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
