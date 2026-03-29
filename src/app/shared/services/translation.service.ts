import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { translations, Lang } from '../i18n/translations';

const STORAGE_KEY = 'interchem_lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private platformId = inject(PLATFORM_ID);

  readonly currentLang = signal<Lang>(this.getInitialLang());

  get(key: string): string {
    return translations[this.currentLang()][key] ?? key;
  }

  setLang(lang: Lang) {
    this.currentLang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }

  private getInitialLang(): Lang {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'az' || stored === 'en') return stored;
    }
    return 'en';
  }
}
