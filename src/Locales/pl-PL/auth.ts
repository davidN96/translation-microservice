import { t } from 'src/Utils/Translation';
import { BaseTranslation, LanguageScope } from 'src/Utils/Types';

const translations: BaseTranslation[] = [
  t('registered', 'Twoje konto zostało pomyślnie założone'),
  t('logged-in', 'Pomyślnie zalogowano'),
  t('logged-out', 'Zostałeś wylogowany'),
  t('fail', 'Nie udało się zalogować'),
];

export default translations.map(
  (translation: BaseTranslation): BaseTranslation => ({
    ...translation,
    key: `${LanguageScope.Auth}.${translation.key}`,
  }),
);
