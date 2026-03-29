import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { NewsService } from '../../shared/services/news.service';
import { NewsItem } from '../../shared/models/news.model';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './news-list.html',
  styleUrl: './news-list.scss',
})
export class NewsList {
  private newsService = inject(NewsService);
  get news(): NewsItem[] {
    return this.newsService.getAll();
  }
}
