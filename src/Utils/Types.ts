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

export interface PagerData {
  size: number;
  skip: number;
}

export interface Pager {
  index: number;
  size: number;
}
