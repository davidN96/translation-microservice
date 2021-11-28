import { setupEnviroment } from 'src/Utils/Enviroment';
import { MongooseModule } from '@nestjs/mongoose';

setupEnviroment();

const connectionOptions = {
  authSource: process.env.DB_AUTH,
  pass: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 1000,
};

export const DatabaseProvider = MongooseModule.forRoot(
  process.env.DB_URI,
  connectionOptions,
);
