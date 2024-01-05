'use client';
import {usePathname} from 'next-intl/client';
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next-intl/link'
import { LangParamProps } from "@/interfaces/commonProps.interface";
import {useTranslations} from 'next-intl';

const Nav: FC<LangParamProps> = ({ params: {locale} }) => {

    const t = useTranslations('navigation');

    const langsArray = ["en", "ar", "fr"];

    const currentPathname = usePathname();

    const [menuToggle, setMenuToggle] = useState(false);

    const generateFlagIcon = (locale: string): string => {
        if(locale === 'fr') {
            return '/images/france_flag.png';
        } else if (locale === 'ar') {
            return '/images/yemen_flag.jpg';
        } else {
            return '/images/canada_flag.png';
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <a className="" href={`/${locale}`} onClick={() => setMenuToggle(false)}>
                    <Image src="/images/logo.png" alt="Arabian House logo" width="60" height="65" />
                </a>

                <input checked={menuToggle} type="checkbox" id="navigation" onClick={() => setMenuToggle(!menuToggle)} />
                <label htmlFor="navigation" className="hamburger hamburger--htx" >
                    <span className="show-mobile">menu</span>
                </label>

                <ul className="nav-menu-container desktop-hide menu">
                    <a className="nav-link" href={`/${locale}`} onClick={() => setMenuToggle(false)}>
                        {t('home')}
                    </a>
                    <Link className="nav-link" href="https://donate.stripe.com/cN23eedRzfG9ciQ7ss" onClick={() => setMenuToggle(false)}>
                        {t('donate')}
                    </Link>
                    <Link className="nav-link" href={`/about-us`} locale={locale} onClick={() => setMenuToggle(false)}>
                        {t('about')}
                    </Link>
                    <Link className="nav-link" href={`/contact-us`} locale={locale} onClick={() => setMenuToggle(false)}>
                        {t('contact')}
                    </Link>
                    <div className="nav-link dropdown-wrapper">
                            <Image className="lang_flag" src={generateFlagIcon(locale)} width="25" height="25" alt="language flag" />
                            {locale?.toUpperCase()}
                            <Image className="arrow" src='/images/down.png' width="15" height="15" alt="arrow icon" />
                        <ul className="dropdown">
                        {
                            langsArray.map((anotherLang) => {
                                if(anotherLang !== locale) {
                                    return (
                                        <li key={anotherLang}>
                                            <Link className="flex" href={`${currentPathname}`} locale={anotherLang} onClick={() => setMenuToggle(false)}>
                                                <Image className="lang_flag" src={generateFlagIcon(anotherLang)} width="25" height="25" alt="language flag" />
                                                {anotherLang.toUpperCase()}
                                            </Link>
                                        </li>
                                    )
                                }})
                        }
                        </ul>
                    </div>

                </ul>
            </div>

        </nav>
    )
}

export default Nav;