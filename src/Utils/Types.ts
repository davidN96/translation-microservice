export interface BaseTranslation {
  key: string;
  value: string;
}

export enum Languages {
  PL = 'pl-PL',
  EN = 'en-EN',
}

export enum LanguageScope {
  Auth = 'auth',
}
