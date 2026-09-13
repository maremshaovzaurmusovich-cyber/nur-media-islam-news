import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { bySlug, sitePages } from '@/lib/navigation';

export function generateStaticParams() {
  return sitePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = bySlug[slug];
  return page ? { title: `${page.title} — ЦДУМТМ`, description: page.description } : {};
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = bySlug[slug];
  if (!page) notFound();

  return <SiteShell>
    <main className="content-page">
      <nav className="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a><span>/</span><span>{page.title}</span></nav>
      <p className="section-kicker">{page.group}</p>
      <h1>{page.title}</h1>
      <p className="page-lead">{page.description}</p>
      {slug === 'poisk' ? <form className="search-form" action="/poisk" method="get">
        <label htmlFor="q">Поиск по сайту</label>
        <div><input id="q" name="q" type="search" placeholder="Введите слово или тему" /><button type="submit">Найти</button></div>
      </form> : <section className="page-placeholder" aria-label="Материалы раздела">
        <h2>Материалы раздела</h2>
        <p>Публикации для этого раздела будут добавлены редакцией ЦДУМТМ.</p>
      </section>}
    </main>
  </SiteShell>;
}
