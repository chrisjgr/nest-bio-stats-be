import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreatePlantDto {
  @IsString()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  redAlertsQuantity: number;

  @IsNotEmpty()
  @IsNumber()
  yellowAlertsQuantity: number;

  @IsNotEmpty()
  @IsNumber()
  okReadsQuantity: number;

  @IsNotEmpty()
  @IsNumber()
  disabledSensorsQuantity: number;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  countryId: string;
}
