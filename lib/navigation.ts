export type SitePage = { title: string; slug: string; description: string; group: string };

export const sitePages: SitePage[] = [
  { title: 'Новости', slug: 'novosti', description: 'Новости и официальные сообщения ЦДУМТМ.', group: 'Главное' },
  { title: 'ЦДУМТМ', slug: 'cdumtm', description: 'Центральное духовное управление мусульман Таврического муфтията.', group: 'Главное' },
  { title: 'Статьи', slug: 'stati', description: 'Статьи о вере, культуре, нравственности и истории Ислама.', group: 'Главное' },
  { title: 'Медиа', slug: 'media', description: 'Фото, видео и аудиоматериалы ЦДУМТМ.', group: 'Главное' },
  { title: 'Контакты', slug: 'kontakty', description: 'Контактная информация Центрального духовного управления.', group: 'Главное' },
  { title: 'Деятельность ЦДУМТМ', slug: 'deyatelnost-cdumtm', description: 'Основные направления деятельности ЦДУМТМ.', group: 'О нас' },
  { title: 'Доклады и выступления', slug: 'doklady-i-vystupleniya', description: 'Доклады, обращения и публичные выступления.', group: 'О нас' },
  { title: 'Столпы Ислама', slug: 'stolpy-islama', description: 'Материалы о пяти столпах Ислама.', group: 'Статьи' },
  { title: 'Пятничные проповеди', slug: 'pyatnichnye-propovedi', description: 'Тексты и материалы пятничных проповедей.', group: 'Статьи' },
  { title: 'Основы вероучения', slug: 'osnovy-veroucheniya', description: 'Основные положения исламского вероучения.', group: 'Статьи' },
  { title: 'Вопросы и ответы', slug: 'voprosy-i-otvety', description: 'Ответы на распространённые вопросы об Исламе.', group: 'Статьи' },
  { title: 'Актуальные темы', slug: 'aktualnye-temy', description: 'Актуальные материалы и разъяснения.', group: 'Статьи' },
  { title: 'Библиотека', slug: 'biblioteka', description: 'Книги и полезные материалы для чтения.', group: 'Статьи' },
  { title: 'Столпы веры', slug: 'stolpy-very', description: 'Материалы об основах исламской веры.', group: 'Статьи' },
  { title: 'Секты', slug: 'sekty', description: 'Разъяснительные материалы о религиозных течениях.', group: 'Статьи' },
  { title: 'Опровержения', slug: 'oproverzheniya', description: 'Разбор заблуждений и недостоверных утверждений.', group: 'Статьи' },
  { title: 'Культура и нравственность', slug: 'kultura-i-nravstvennost', description: 'Об исламской культуре, этике и нравственности.', group: 'Статьи' },
  { title: 'Женщина в Исламе', slug: 'zhenshchina-v-islame', description: 'Материалы о положении и роли женщины в Исламе.', group: 'Статьи' },
  { title: 'Семья в Исламе', slug: 'semya-v-islame', description: 'О семейных ценностях и отношениях в Исламе.', group: 'Статьи' },
  { title: 'Суфизм', slug: 'sufizm', description: 'Познавательные материалы о суфизме.', group: 'Статьи' },
  { title: 'Вопросы веры', slug: 'voprosy-very', description: 'Разъяснения по вопросам веры.', group: 'Статьи' },
  { title: 'Путешествие по странам', slug: 'puteshestvie-po-stranam', description: 'Истории о мусульманских странах и народах.', group: 'Статьи' },
  { title: 'Восточная медицина', slug: 'vostochnaya-meditsina', description: 'Познавательные материалы о традициях восточной медицины.', group: 'Статьи' },
  { title: 'История Ислама', slug: 'istoriya-islama', description: 'События, личности и памятные даты истории Ислама.', group: 'Статьи' },
  { title: 'Благословенная пятница', slug: 'blagoslovennaya-pyatnitsa', description: 'Материалы о значении благословенной пятницы.', group: 'Статьи' },
  { title: 'Неверные мнения о Рамадане', slug: 'mneniya-o-ramadane', description: 'Разъяснение распространённых заблуждений о Рамадане.', group: 'Статьи' },
  { title: "Ду'а и Зикры", slug: 'dua-i-zikry', description: "Материалы о ду'а и поминании Всевышнего.", group: 'Статьи' },
  { title: "Тафсир Къур'ана", slug: 'tafsir-kurana', description: "Материалы по толкованию Къур'ана.", group: 'Статьи' },
  { title: "Къур'ан", slug: 'kuran', description: "Материалы для чтения и изучения Къур'ана.", group: 'Медиа' },
  { title: 'Фотогалерея', slug: 'fotogalereya', description: 'Фотографии с мероприятий и событий ЦДУМТМ.', group: 'Медиа' },
  { title: 'Видеогалерея', slug: 'videogalereya', description: 'Видео с мероприятий, выступлений и проповедей.', group: 'Медиа' },
  { title: 'Поиск', slug: 'poisk', description: 'Поиск по материалам сайта.', group: 'Сервис' },
];

export const bySlug = Object.fromEntries(sitePages.map((page) => [page.slug, page]));
export const byTitle = Object.fromEntries(sitePages.map((page) => [page.title, page]));
