import 'dotenv/config';
import { cleanEnv, str, ValidatorSpec } from 'envalid';

interface Env {
  APP_NAME: string;
  NODE_ENV: string;
}

type EnvSpec = { [ K in keyof Env ]: ValidatorSpec<Env[ K ]> };

const environment: EnvSpec = {
  APP_NAME: str(),
  NODE_ENV: str({ choices: [ 'testing', 'development', 'staging', 'production' ] }),
};

export const Config = cleanEnv<Env>(process.env, environment);
