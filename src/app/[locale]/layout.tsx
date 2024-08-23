
import type { Metadata } from "next";

import "./globals.css";
import Navigation from "@/components/header/Navigation";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "BEC 2024 — Best Engineering Competitions",
  description: "BEST Engineering Competitions 2024. Інженерні змагання повертаються. Спробуй себе в одній з двох запропонованих категорій і покажи за ким майбутнє!",
};

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className=' w-full overflow-hidden bg-side text-white'>
           
            <Navigation/>
              {children}
            <Footer/>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
