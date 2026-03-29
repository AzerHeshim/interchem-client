import { Lang } from '../i18n/translations';

export interface NewsItemData {
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  image: string;
  date: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
}
