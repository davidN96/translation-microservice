import { TRANSLATION, TranslationSchema } from './Translation.model';
import { MongooseModule } from '@nestjs/mongoose';

// export const TranslationProvider = {
//   provide: TRANSLATION,
//   useFactory: (connection: Connection) =>
//     connection.model(TRANSLATION, TranslationSchema),
//   inject: [Providers.DATABASE],
// };

export const TranslationProvider = MongooseModule.forFeature([
  { name: TRANSLATION, schema: TranslationSchema },
]);
