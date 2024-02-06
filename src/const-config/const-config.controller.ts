import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller("const-config")
export class ConstConfigController {

  constructor(
    private readonly configService: ConfigService
  ) {
  }

  @Get()
  getConfig(): {
    port: number;
    databaseUrl: string;
  } {
    const nest = this.configService.get("nest");
    const database = this.configService.get("database");

    return {
      databaseUrl: database.databaseUrl,
      port: nest.port
    };
  }
}
