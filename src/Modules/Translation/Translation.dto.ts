import { LanguageScope, Pager } from 'src/Utils/Types';

export interface TranslateMessage {
  language: string;
  key: string;
}

export interface TranslationOverwrite {
  language: string;
  value: string;
  key: string;
}

export interface ListFilters {
  filters: { language: string; scope: LanguageScope };
  pager: Pager;
}
