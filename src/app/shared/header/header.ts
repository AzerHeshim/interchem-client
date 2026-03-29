import { Component, HostBinding, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';
import { Lang } from '../i18n/translations';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  i18n = inject(TranslationService);
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  get currentLang() {
    return this.i18n.currentLang;
  }

  @HostBinding('class.scrolled')
  get scrolledClass() {
    return this.isScrolled();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }

  setLang(lang: Lang) {
    this.i18n.setLang(lang);
  }
}
