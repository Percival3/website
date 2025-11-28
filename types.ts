export enum PageRoute {
  HOME = 'home',
  PUBLICATIONS = 'publications',
  ARTICLE = 'article',
  DATA = 'data',
  SOCIAL_WORK = 'social_work',
  ARCHIVE = 'archive',
  DIARY = 'diary'
}

export enum Language {
  EN = 'en',
  ZH = 'zh',
  JA = 'ja'
}

export interface NavigationItem {
  label: string;
  route: PageRoute;
}