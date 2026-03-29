import { RenderMode, ServerRoute } from '@angular/ssr';

const newsSlugs = [
  'subsidiya-odenislerine-baslanib',
];

export const serverRoutes: ServerRoute[] = [
  {
    path: 'news/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return newsSlugs.map((slug) => ({ slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
