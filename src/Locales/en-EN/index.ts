import { Translation } from 'models/Translation.model';
import { BaseTranslation, Languages } from 'src/Utils/Types';
import Auth from './auth';

const translations: BaseTranslation[] = [...Auth];

export default translations.map(
  (translation: BaseTranslation): Translation => ({
    language: Languages.EN,
    ...translation,
  }),
);
