"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Link, usePathname } from "@/src/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export const Navbar = () => {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const pathname = usePathname();

    return (
        <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
            <Link href="/"><div className="text-xl font-bold tracking-tighter">{t('title')}</div></Link>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 text-sm font-bold">
                    <Link href={pathname} locale="en" className={`${locale === 'en' ? 'text-white' : 'text-zinc-600 hover:text-white'} transition-colors`}>EN</Link>
                    <span className="text-zinc-800">/</span>
                    <Link href={pathname} locale="fr" className={`${locale === 'fr' ? 'text-white' : 'text-zinc-600 hover:text-white'} transition-colors`}>FR</Link>
                </div>

                <div className="w-[1px] h-4 bg-zinc-800" />

                <div className="flex gap-6">
                    <a href="https://github.com/sashsutton" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/sashasutton4/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
                    <a href="mailto:sashasuttons3@icloud.com" className="hover:text-indigo-400 transition-colors"><Mail size={20} /></a>
                    <a href="/resume.pdf" download className="hover:text-indigo-400 transition-colors" title={t('downloadCV')}><FileText size={20} /></a>
                </div>
            </div>
        </nav>
    );
}
