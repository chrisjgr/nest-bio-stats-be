import { IsNumber } from 'class-validator';

export class UpdatePlantDto {
  @IsNumber()
  redAlertsQuantity: number;

  @IsNumber()
  yellowAlertsQuantity: number;

  @IsNumber()
  okReadsQuantity: number;

  @IsNumber()
  disabledSensorsQuantity: number;
}
