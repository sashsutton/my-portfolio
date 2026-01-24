import { Scene } from "./components/Scene";
import { Navbar } from "./components/Navbar";
import { StarBackground } from "./components/StarBackground";
import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import { Music, Binary, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations('Home');

    return (
        <main className="min-h-screen text-white selection:bg-indigo-500/30">
            <StarBackground />
            <Navbar />

            {/* 1. Hero Landing */}
            <section className="h-[90vh] flex flex-col lg:flex-row items-center px-6 lg:px-24">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-7xl font-black tracking-tighter italic">{t('hero.title')}</h1>
                    <p className="text-zinc-400 text-xl max-w-md leading-relaxed">
                        {t('hero.subtitle1')}<br />
                        {t('hero.subtitle2')}
                    </p>
                </div>
                <div className="w-full lg:w-1/2 h-[400px]">
                    <Scene />
                </div>
            </section>

            {/* 2. The Introduction*/}
            <section className="py-24 px-6 lg:px-24 border-y border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="relative w-64 h-64 shrink-0 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border-2 border-indigo-500/20">
                        <div className="absolute inset-0 bg-indigo-500/10" />
                        <Image
                            src="/my-face.jpg"
                            alt="Sasha Sutton"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold italic">{t('intro.title')}</h2>

                        <p className="text-zinc-400 text-lg">
                            {t.rich('intro.p1', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>

                        <p className="text-zinc-400 text-lg">
                            {t.rich('intro.p2', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>

                        <p className="text-zinc-400 text-lg">
                            {t.rich('intro.p3', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>
                    </div>

                </div>
            </section>

            {/* 3. The Two Paths (Navigation Blocks) */}
            <section className="grid grid-cols-1 md:grid-cols-2 h-screen">

                {/* Creative Side */}
                <Link href="/creative" className="group relative flex flex-col items-center justify-center border-r border-zinc-900 overflow-hidden bg-zinc-950/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Music size={60} className="text-zinc-700 group-hover:text-pink-500 transition-colors mb-6" />
                    <h2 className="text-4xl font-black group-hover:tracking-widest transition-all">{t('navigation.creative.title')}</h2>
                    <p className="mt-4 text-zinc-500 text-sm">{t('navigation.creative.description')}</p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all">
                        {t('navigation.creative.action')} <ArrowRight size={14} />
                    </div>
                </Link>

                {/* Scientist Side */}
                <Link href="/scientist" className="group relative flex flex-col items-center justify-center overflow-hidden bg-zinc-950/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Binary size={60} className="text-zinc-700 group-hover:text-indigo-500 transition-colors mb-6" />
                    <h2 className="text-4xl font-black group-hover:tracking-widest transition-all">{t('navigation.scientist.title')}</h2>
                    <p className="mt-4 text-zinc-500 text-sm">{t('navigation.scientist.description')}</p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all">
                        {t('navigation.scientist.action')} <ArrowRight size={14} />
                    </div>
                </Link>

            </section>
        </main>
    );
}