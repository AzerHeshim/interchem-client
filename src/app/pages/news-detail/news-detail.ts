import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { NewsService } from '../../shared/services/news.service';
import { NewsItem } from '../../shared/models/news.model';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './news-detail.html',
  styleUrl: './news-detail.scss',
})
export class NewsDetail {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);
  private slug = this.route.snapshot.paramMap.get('slug') ?? '';

  get article(): NewsItem | undefined {
    return this.newsService.getBySlug(this.slug);
  }
}
