import { ApiTags } from '@nestjs/swagger';
import { DatabaseService } from './database.service';
import { Controller, Get } from '@nestjs/common';

@ApiTags('Seed')
@Controller('seed')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  executeSeed() {
    return this.databaseService.runSeed();
  }
}
