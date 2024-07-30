"use client"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
interface LinksProps {
    home: string,
    partners: string,
    organizers: string,
}

const Links: React.FC = () => {
    const  t  = useTranslations('');
    const locale = useLocale();
    const path = usePathname()
    return (
        <>  
            <Link className={path == (`/${locale}`) ? "active options-item" : "options-item"} href={`/${locale}/`}>{t('nav.home')}</Link>
            <Link className={path.startsWith(`/${locale}/partners`) ? "active options-item" : "options-item"} href={`/${locale}/partners`}>{t('nav.partners')}</Link>
            <Link className={path.startsWith(`/${locale}/organizers`) ? "active options-item" : "options-item"} href={`/${locale}/organizers`}>{t('nav.organizers')}</Link>
        </>
        
    )
};

export default Links;
