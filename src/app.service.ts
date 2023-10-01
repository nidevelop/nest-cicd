import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const databaseUrl = this.configService.get<string>('DATABASE_URL');
    return databaseUrl;
  }
}
