import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Config } from "./config/config";

@Controller("validation-config")
export class ValidationConfigController {
  constructor(
    private readonly configService: ConfigService<Config, true>
  ) {
  }

  @Get()
  getConfig(): {
    port: number;
    databaseUrl: string;
  } {
    const port = this.configService.get<number>("PORT");
    const databaseUrl = this.configService.get<string>("DATABASE_URL");

    return {
      databaseUrl,
      port,
    };
  }
}
