export interface TranslateMessage {
  language: string;
  key: string;
}

export interface TranslationOverwrite {
  language: string;
  value: string;
  key: string;
}
