'use client';

import { BookOpenText, ChevronDown, CirclePlay, House, Menu, Newspaper, Phone, Search, Send, Users, X } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { label: 'Главная', icon: House }, { label: 'Новости', icon: Newspaper },
  { label: 'Об Исламе', icon: BookOpenText }, { label: 'Статьи', icon: BookOpenText },
  { label: 'Медиа', icon: CirclePlay }, { label: 'Контакты', icon: Phone },
];
const sections = [
  { title: 'О нас', icon: Users, links: ['О проекте', 'Наша редакция'] },
  { title: 'Статьи', icon: BookOpenText, links: ['Основы вероучения', 'Актуальные темы', 'Культура и нравственность', 'Семья в Исламе', 'История Ислама'] },
  { title: 'Медиа', icon: CirclePlay, links: ['Фотогалерея', 'Видеогалерея'] },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className="brand" aria-label="Нур Медиа">
    <svg className={compact ? 'brand-mark compact' : 'brand-mark'} viewBox="0 0 64 70" aria-hidden="true">
      <path d="M32 7c-4.7 0-8-3.6-8-8 0 6.8 4 11 10.5 11 2.8 0 5.1-.8 7-2.5A10.8 10.8 0 0 1 32 7Z" />
      <path d="M32 16C22 28 11 29 11 47v18M32 16c10 12 21 13 21 31v18M20 65V48c0-6 4-10 12-18 8 8 12 12 12 18v17M25 65V50l7-8 7 8v15" />
    </svg>
    <div className="brand-copy"><strong>НУР МЕДИА</strong>{!compact && <span>Новости • Знание • Единство</span>}</div>
  </div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  return <div className="site-shell">
    <header className="site-header">
      <button className="icon-button" aria-label="Открыть меню" onClick={() => setOpen(true)}><Menu /></button>
      <Brand />
      <div className="header-actions">
        <a href="#" aria-label="Telegram"><Send /></a><a href="#" aria-label="Видео"><CirclePlay /></a>
        <span className="divider" /><button className="icon-button" aria-label="Поиск"><Search /></button>
      </div>
    </header>

    <main className="empty-canvas" aria-label="Место для будущих новостей"><span>Здесь появятся главные новости</span></main>

    <footer className="site-footer">
      <div className="footer-nav">
        {sections.map(({ title, icon: Icon, links }) => <details key={title} open>
          <summary><Icon /><b>{title}</b><ChevronDown /></summary>
          <div className="footer-links">{links.map((link) => <a href="#" key={link}>{link}</a>)}</div>
        </details>)}
        <a className="footer-row" href="#"><Newspaper /><b>Новости</b></a>
        <a className="footer-row" href="#"><Phone /><b>Контакты</b></a>
      </div>
      <div className="footer-bottom"><Brand compact /><p>«Знание. Нравственность.<br />Единство.»</p><small>© 2026 Нур Медиа. Все права защищены.</small></div>
    </footer>

    <div className={`drawer-backdrop ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />
    <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="drawer-head"><Brand compact /><button className="icon-button" aria-label="Закрыть меню" onClick={() => setOpen(false)}><X /></button></div>
      <nav>{menuItems.map(({ label, icon: Icon }, index) => <a href="#" className={index === 0 ? 'active' : ''} key={label}><Icon />{label}</a>)}</nav>
    </aside>
  </div>;
}
