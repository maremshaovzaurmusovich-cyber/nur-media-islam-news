'use client';

import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import { byTitle } from '@/lib/navigation';

const menuItems = [
  { label: 'Главная', href: '/', icon: '⌂' },
  { label: 'Новости', href: '/novosti', icon: '▤' },
  { label: 'ЦДУМТМ', href: '/cdumtm', icon: '◠' },
  { label: 'Статьи', href: '/stati', icon: '▧' },
  { label: 'Медиа', href: '/media', icon: '▶' },
  { label: 'Контакты', href: '/kontakty', icon: '☎' },
];
const sections = [
  { title: 'О нас', icon: '♟', links: ['Деятельность ЦДУМТМ', 'Доклады и выступления'] },
  { title: 'Статьи', icon: '▤', links: [
    'Столпы Ислама', 'Пятничные проповеди', 'Основы вероучения', 'Вопросы и ответы', 'Актуальные темы',
    'Библиотека', 'Столпы веры', 'Секты', 'Опровержения', 'Культура и нравственность', 'Женщина в Исламе',
    'Семья в Исламе', 'Суфизм', 'Вопросы веры', 'Путешествие по странам', 'Восточная медицина',
    'История Ислама', 'Благословенная пятница', 'Неверные мнения о Рамадане', "Ду'а и Зикры", "Тафсир Къур'ана",
  ] },
  { title: 'Медиа', icon: '▣', links: ["Къур'ан", 'Фотогалерея', 'Видеогалерея'] },
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
      <button className="icon-button text-icon" aria-label="Открыть меню" onClick={() => setOpen(true)}>☰</button>
      <Brand />
      <div className="header-actions">
        <a href="/kontakty" aria-label="Связаться с ЦДУМТМ"><span aria-hidden="true">➤</span></a>
        <a href="/videogalereya" aria-label="Видеогалерея"><span aria-hidden="true">▶</span></a>
        <span className="divider" /><a className="icon-button text-icon" href="/poisk" aria-label="Поиск">⌕</a>
      </div>
    </header>

    {children}

    <footer className="site-footer">
      <div className="footer-nav">
        {sections.map(({ title, icon, links }) => <details key={title} open>
          <summary><span className="nav-icon" aria-hidden="true">{icon}</span><b>{title}</b><span className="chevron" aria-hidden="true">⌃</span></summary>
          <div className="footer-links">{links.map((label) => <a href={`/${byTitle[label].slug}`} key={label}>{label}</a>)}</div>
        </details>)}
        <a className="footer-row" href="/novosti"><span className="nav-icon" aria-hidden="true">▤</span><b>Новости</b></a>
        <a className="footer-row" href="/kontakty"><span className="nav-icon" aria-hidden="true">☎</span><b>Контакты</b></a>
      </div>
      <div className="footer-bottom"><Brand /><p>«Знание. Нравственность.<br />Единство.»</p><small>© 2024 ЦДУМТМ. Все права защищены.</small></div>
    </footer>

    <div className={`drawer-backdrop ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />
    <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="drawer-head"><Brand compact /><button className="icon-button close-button" aria-label="Закрыть меню" onClick={() => setOpen(false)}>×</button></div>
      <nav>{menuItems.map(({ label, href, icon }) => <a href={href} className={pathname === href ? 'active' : ''} key={label}><span className="nav-icon" aria-hidden="true">{icon}</span>{label}</a>)}</nav>
    </aside>
  </div>;
}
