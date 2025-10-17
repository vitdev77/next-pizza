import { Nunito } from 'next/font/google';
import { Providers, ToTopButton } from '@/shared/components';

import './globals.css';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link data-rh="true" rel="icon" href="/logo.svg" />
      </head>
      <body className={`${nunito.className} antialiased relative`}>
        <Providers>{props.children}</Providers>
        <ToTopButton />
      </body>
    </html>
  );
}
