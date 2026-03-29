import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';
import { Lang } from '../i18n/translations';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  i18n = inject(TranslationService);

  get currentLang() {
    return this.i18n.currentLang;
  }

  setLang(lang: Lang) {
    this.i18n.setLang(lang);
  }
}
