import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ЦДУМТМ — Центральное духовное управление мусульман Таврического муфтията',
  description: 'Официальный новостной сайт Центрального духовного управления мусульман Таврического муфтията.',
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
