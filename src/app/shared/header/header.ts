import { Component, HostBinding, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

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
}
