import { en } from './en';
import { az } from './az';

export type Lang = 'en' | 'az';

export const translations: Record<Lang, Record<string, string>> = { en, az };
