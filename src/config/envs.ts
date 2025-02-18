import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

const result = envsSchema.validate(process.env);
const value = result.value as EnvVars;
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
const error: joi.ValidationError | undefined = result.error;

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
};
