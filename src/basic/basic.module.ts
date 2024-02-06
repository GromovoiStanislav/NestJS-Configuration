import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BasicController } from './basic.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: '.env',
    }),
  ],
  controllers: [
    BasicController
  ],
})
export class BasicModule {}
