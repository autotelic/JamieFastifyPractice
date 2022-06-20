import { join } from 'desm';
//import helper function to get the correct path to the .env
import S from 'fluent-json-schema';
import envSchema from 'env-schema';

const schema = S.object()
.prop('JWT_SECRET', S.string().required())
.prop('LOG_LEVEL', S.string().default('info'))
.prop('PINO_PRETTY', S.string().default('pino-pretty'))
.prop('PG_CONNECTION_STRING', S.string().required())

// JWT_SECRET, holds the json web token so it can be used
// LOG_LEVEL, from Pino and allows us to see extra information that we might help with debugging etc.
// Currently set to info by default
// PINO_PRETTY, From Pino and allows us to print human readable logs (also used in ex03)
// PG_CONNECTION_STRING, postgres connection string,

const config = envSchema({
  schema: schema,
  dotenv: { path: join(import.meta.url, '.env') },
});

export default config;
