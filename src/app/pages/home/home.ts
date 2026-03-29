import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { NewsService } from '../../shared/services/news.service';
import { NewsItem } from '../../shared/models/news.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements AfterViewInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private newsService = inject(NewsService);

  get latestNews(): NewsItem[] {
    return this.newsService.getLatest(3);
  }

  partners = [
    { name: 'OCP', logo: 'assets/partners/ocp.png' },
    { name: 'Sunset', logo: 'assets/partners/sunset.png' },
    { name: 'Tessenderlo Group', logo: 'assets/partners/tessenderlo.png' },
    { name: 'Bioiberica', logo: 'assets/partners/bioiberica.png' },
    { name: 'BASF', logo: 'assets/partners/basf.png' },
    { name: 'Bayer Crop Science', logo: 'assets/partners/bayer-crop-science-vector-logo.png' },
    { name: 'Yara International', logo: 'assets/partners/Yara_International_(1).jpg' },
    { name: 'Brenntag', logo: 'assets/partners/BRENNTAG.png' },
    { name: 'DUSLO', logo: 'assets/partners/DUSLO.png' },
    { name: 'Indorama', logo: 'assets/partners/indorama.png' },
    { name: 'Platin Kimya', logo: 'assets/partners/Platin Kimya.png' },
    { name: 'Manica', logo: 'assets/partners/Logo_Manica_RGB_positivo.png' },
    { name: 'ADP', logo: 'assets/partners/ADP-3.jpg' },
    { name: 'Adob', logo: 'assets/partners/adob 34.JPG' },
    { name: 'Deva', logo: 'assets/partners/deva.jpg' },
    { name: 'Safa Tarım', logo: 'assets/partners/safa tarım.jpg' },
  ];

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Defer to next macrotask so browser has settled layout after hydration
    setTimeout(() => {
      const host = this.el.nativeElement as HTMLElement;
      const sections = Array.from(host.querySelectorAll('.fade-in-section'));

      // Only hide elements that are off-screen — visible ones stay untouched
      const offScreen: Element[] = [];
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <= 0) {
          section.classList.add('will-animate');
          offScreen.push(section);
        }
      });

      if (offScreen.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('will-animate');
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
      );

      offScreen.forEach((section) => observer.observe(section));
    });
  }
}
