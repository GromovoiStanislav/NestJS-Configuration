import { z } from "zod";
import { configSchema } from "./config.interface";

export type Config = z.infer<typeof configSchema>;

export const config = (config: Record<string, unknown>) => {
  return configSchema.parse(config);
};
