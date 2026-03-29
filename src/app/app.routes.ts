import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewsList } from './pages/news-list/news-list';
import { NewsDetail } from './pages/news-detail/news-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'news', component: NewsList },
  { path: 'news/:slug', component: NewsDetail },
];
