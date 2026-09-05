import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Нур Медиа — новости об Исламе',
  description: 'Новости, знания и полезные материалы об Исламе.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
