import { TRANSLATION, TranslationSchema } from './Translation.model';
import { MongooseModule } from '@nestjs/mongoose';

export const TranslationProvider = MongooseModule.forFeature([
  { name: TRANSLATION, schema: TranslationSchema },
]);
