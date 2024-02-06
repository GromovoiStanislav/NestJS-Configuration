import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller("basic")
export class BasicController {

  constructor(
    private readonly configService: ConfigService
  ) {
  }

  @Get()
  getConfig(): {
    port: number;
    databaseUrl: string;
  } {
    return {
      databaseUrl: this.configService.get<string>("DATABASE_URL"),
      port: Number(this.configService.get<number>("PORT"))
    };
  }
}
