import { t } from 'src/Utils/Translation';
import { BaseTranslation, LanguageScope } from 'src/Utils/Types';

const translations: BaseTranslation[] = [
  t('registered', 'Your account has been registered'),
  t('logged-in', 'Successfully logged in'),
  t('logged-out', 'Successfully logged out'),
  t('fail', 'Could not log in'),
];
export default translations.map(
  (translation: BaseTranslation): BaseTranslation => ({
    ...translation,
    key: `${LanguageScope.Auth}.${translation.key}`,
  }),
);
