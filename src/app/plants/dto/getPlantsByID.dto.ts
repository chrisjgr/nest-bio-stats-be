import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class GetPlantsByIdDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  plantId: string;
}
