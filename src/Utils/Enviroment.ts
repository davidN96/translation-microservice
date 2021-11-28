import * as dotenv from 'dotenv';
import * as path from 'path';

export const setupEnviroment = () => {
  dotenv.config({ path: path.join(path.resolve(), 'src', '.env') });
};
