'use client';

import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import { byTitle } from '@/lib/navigation';

type IconName = 'menu' | 'home' | 'news' | 'mosque' | 'article' | 'media' | 'phone' | 'search' | 'send' | 'users' | 'chevron';

function UiIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    news: <><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M9 7h6M9 11h6M9 15h6M9 18h4" /></>,
    mosque: <><path d="M4 21v-7c0-4 3-5 8-10 5 5 8 6 8 10v7M8 21v-6l4-4 4 4v6" /><path d="M12 4a3 3 0 0 1 2-3" /></>,
    article: <><path d="M6 3h9l3 3v15H6z" /><path d="M14 3v4h4M9 11h6M9 15h6M9 18h4" /></>,
    media: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m10 9 6 3-6 3z" /></>,
    phone: <path d="M6.5 3.5 9 8 7.2 9.8c1.5 3.1 3.9 5.5 7 7l1.8-1.8 4.5 2.5-1 3c-.3.9-1.2 1.5-2.2 1.3C9.6 20.5 3.5 14.4 2.2 6.7 2 5.7 2.6 4.8 3.5 4.5z" />,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></>,
    send: <><path d="m3 11 18-8-8 18-2-8z" /><path d="m11 13 4-4" /></>,
    users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-4 2-6 6-6s6 2 6 6M15 15c3 0 5 1.5 5 4" /></>,
    chevron: <path d="m6 15 6-6 6 6" />,
  };
  return <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

const menuItems = [
  { label: 'Главная', href: '/', icon: 'home' as IconName },
  { label: 'Новости', href: '/novosti', icon: 'news' as IconName },
  { label: 'ЦДУМТМ', href: '/deyatelnost-cdumtm', icon: 'mosque' as IconName },
  { label: 'Контакты', href: '/kontakty', icon: 'phone' as IconName },
];
const sections = [
  { title: 'О нас', icon: 'users' as IconName, links: ['Деятельность ЦДУМТМ', 'Контакты'] },
  { title: 'Статьи', icon: 'article' as IconName, links: [
    'Столпы Ислама', 'Пятничные проповеди', 'Основы вероучения', 'Вопросы и ответы', 'Актуальные темы',
    'Библиотека', 'Столпы веры', 'Секты', 'Опровержения', 'Культура и нравственность', 'Женщина в Исламе',
    'Семья в Исламе', 'Суфизм', 'Вопросы веры', 'Путешествие по странам', 'Восточная медицина',
    'История Ислама', 'Благословенная пятница', 'Неверные мнения о Рамадане', "Ду'а и Зикры", "Тафсир Къур'ана",
  ] },
  { title: 'Медиа', icon: 'media' as IconName, links: ["Къур'ан", 'Фотогалерея', 'Видеогалерея'] },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return <a className="brand" href="/" aria-label="ЦДУМТМ — на главную">
    <svg className={compact ? 'brand-mark compact' : 'brand-mark'} viewBox="0 0 64 70" aria-hidden="true">
      <path d="M32 7c-4.7 0-8-3.6-8-8 0 6.8 4 11 10.5 11 2.8 0 5.1-.8 7-2.5A10.8 10.8 0 0 1 32 7Z" />
      <path d="M32 16C22 28 11 29 11 47v18M32 16c10 12 21 13 21 31v18M20 65V48c0-6 4-10 12-18 8 8 12 12 12 18v17M25 65V50l7-8 7 8v15" />
    </svg>
    <span className="brand-copy"><strong>ЦДУМТМ</strong>{!compact && <span>Центральное духовное управление<br />мусульман Таврического муфтията</span>}</span>
  </a>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <div className="site-shell">
    <header className="site-header">
      <button className="icon-button" aria-label="Открыть меню" onClick={() => setOpen(true)}><UiIcon name="menu" /></button>
      <Brand />
      <div className="header-actions">
        <a href="/kontakty" aria-label="Связаться с ЦДУМТМ"><UiIcon name="send" /></a>
        <a href="/videogalereya" aria-label="Видеогалерея"><UiIcon name="media" /></a>
        <span className="divider" /><a className="icon-button" href="/poisk" aria-label="Поиск"><UiIcon name="search" /></a>
      </div>
    </header>

    {children}

    <footer className="site-footer">
      <div className="footer-nav">
        {sections.map(({ title, icon, links }) => <details key={title} open>
          <summary><span className="nav-icon"><UiIcon name={icon} /></span><b>{title}</b><span className="chevron"><UiIcon name="chevron" /></span></summary>
          <div className="footer-links">{links.map((label) => <a href={`/${byTitle[label].slug}`} key={label}>{label}</a>)}</div>
        </details>)}
        <a className="footer-row" href="/novosti"><span className="nav-icon"><UiIcon name="news" /></span><b>Новости</b></a>
      </div>
      <div className="footer-bottom"><Brand /><p>«Знание. Нравственность.<br />Единство.»</p><small>© 2024 ЦДУМТМ. Все права защищены.</small></div>
    </footer>

    <div className={`drawer-backdrop ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />
    <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="drawer-head"><Brand compact /><button className="icon-button close-button" aria-label="Закрыть меню" onClick={() => setOpen(false)}>×</button></div>
      <nav>
        {menuItems.slice(0, 3).map(({ label, href, icon }) => <a href={href} className={pathname === href ? 'active' : ''} key={label}><span className="nav-icon"><UiIcon name={icon} /></span>{label}</a>)}
        {sections.filter(({ title }) => title === 'Статьи' || title === 'Медиа').map(({ title, icon, links }) => <details className="drawer-section" key={title}>
          <summary><span className="nav-icon"><UiIcon name={icon} /></span><b>{title}</b><span className="chevron"><UiIcon name="chevron" /></span></summary>
          <div className="drawer-submenu">{links.map((label) => {
            const href = `/${byTitle[label].slug}`;
            return <a href={href} className={pathname === href ? 'active' : ''} key={label}>{label}</a>;
          })}</div>
        </details>)}
        {menuItems.slice(3).map(({ label, href, icon }) => <a href={href} className={pathname === href ? 'active' : ''} key={label}><span className="nav-icon"><UiIcon name={icon} /></span>{label}</a>)}
      </nav>
    </aside>
  </div>;
}
