import { Navbar } from "../components/Navbar";
import { Music, Instagram, Mic2, Disc } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "../components/FadeIn";
import { useTranslations } from "next-intl";

// Deterministic pseudo-random bars — must be stable between server and client render.
const EQ_BARS = Array.from({ length: 48 }, (_, i) => ({
    height: 22 + ((i * 83) % 68),
    delay: (i * 137) % 900,
    duration: 850 + ((i * 251) % 750)
}));

const stripsData = [
    { key: "mixing", level: 76, tilt: -2 },
    { key: "soundDesign", level: 62, tilt: 1.5 },
    { key: "djing", level: 84, tilt: -1 },
    { key: "collaboration", level: 68, tilt: 2 }
];

function ChannelStrip({ label, desc, level, tilt }: { label: string, desc: string, level: number, tilt: number }) {
    return (
        <div className="group p-6 rounded-[2rem] bg-zinc-950 border border-zinc-800 hover:border-pink-500/40 transition-colors flex flex-col items-center text-center">
            {/* Fader */}
            <div className="relative h-44 w-[3px] bg-zinc-800 rounded-full my-2" aria-hidden>
                {[0, 25, 50, 75, 100].map(p => (
                    <span key={p} className="absolute left-1/2 -translate-x-1/2 w-4 h-px bg-zinc-800" style={{ top: `${p}%` }} />
                ))}
                {/* Unity gain mark */}
                <span className="absolute left-1/2 -translate-x-1/2 w-5 h-px bg-zinc-600" style={{ top: "30%" }} />
                {/* Fader cap */}
                <span
                    className="absolute left-1/2 -translate-x-1/2 w-9 h-5 rounded-[4px] bg-zinc-900 border border-zinc-700 shadow-lg shadow-black group-hover:border-pink-500/60 group-hover:-translate-y-1 transition-all duration-300"
                    style={{ top: `calc(${100 - level}% - 10px)` }}
                >
                    <span className="absolute inset-x-1.5 top-1/2 -translate-y-1/2 h-[2px] bg-pink-500 rounded" />
                </span>
            </div>

            {/* Console tape label */}
            <span
                className="mt-4 px-3 py-1 bg-zinc-200 text-zinc-900 text-[10px] font-mono font-bold uppercase tracking-wider rounded-[2px] shadow"
                style={{ transform: `rotate(${tilt}deg)` }}
            >
                {label}
            </span>
            <p className="text-xs text-zinc-500 mt-4 leading-relaxed">{desc}</p>
        </div>
    );
}

export default function Creative() {
    const t = useTranslations('Creative');

    return (
        <main className="min-h-screen bg-black text-white selection:bg-pink-500/30">
            <Navbar />

            {/* Hero */}
            <FadeIn>
                <section className="px-6 lg:px-24 pt-20 pb-10 text-center">
                    <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-500 mb-6">
                        {t('header.eyebrow')}
                    </p>
                    <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight mb-8 text-white [text-shadow:0_0_70px_rgba(236,72,153,0.4)]">
                        {t('header.title')}
                    </h1>
                    <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
                        {t('header.description')}
                    </p>

                    {/* EQ visualizer */}
                    <div aria-hidden className="mt-14 mx-auto max-w-3xl h-16 flex items-end justify-center gap-[3px] opacity-70">
                        {EQ_BARS.map((b, i) => (
                            <span
                                key={i}
                                className="eq-bar w-1 sm:w-1.5 rounded-t-sm bg-gradient-to-t from-pink-700 to-pink-300"
                                style={{
                                    "--h": `${b.height}%`,
                                    "--delay": `${b.delay}ms`,
                                    "--dur": `${b.duration}ms`
                                } as React.CSSProperties}
                            />
                        ))}
                    </div>
                </section>
            </FadeIn>

            {/* Fabric story + featured set */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[220px]">

                    {/* Main Performance/Bio Card */}
                    <div className="md:row-span-2 p-10 rounded-[3rem] bg-zinc-900 border border-zinc-800 flex flex-col justify-end relative overflow-hidden group">
                        <Image
                            src="/dj_photo.jpg"
                            alt="DJ Performance"
                            fill
                            className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/50 rounded-full text-[10px] font-bold tracking-widest uppercase">{t('experience.label')}</span>
                            </div>
                            <h2 className="font-display text-3xl font-bold mb-4">{t('experience.title')}</h2>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                {t.rich('experience.description', {
                                    highlight: (chunks) => <span className="text-white font-medium">{chunks}</span>
                                })}
                            </p>
                        </div>
                    </div>

                    {/* Featured Set Centerpiece */}
                    <div className="md:row-span-2 rounded-[3rem] overflow-hidden border border-zinc-800 bg-black relative">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/bTA1Srxxnmc"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </FadeIn>

            {/* The Console */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-16">
                    <h2 className="font-display text-3xl font-bold mb-2 text-center">{t('console.title')}</h2>
                    <p className="text-zinc-500 text-sm text-center mb-12">{t('console.subtitle')}</p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
                        {stripsData.map(s => (
                            <ChannelStrip
                                key={s.key}
                                label={t(`console.strips.${s.key}.title`)}
                                desc={t(`console.strips.${s.key}.desc`)}
                                level={s.level}
                                tilt={s.tilt}
                            />
                        ))}
                    </div>
                </section>
            </FadeIn>

            {/* Capabilities / follow bar */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 pb-20">
                    <div className="p-8 rounded-[3rem] bg-zinc-900/50 border border-zinc-800/50 flex flex-wrap items-center justify-around gap-6 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-2">
                            <Mic2 className="text-pink-500" size={20} />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{t('footer.recording')}</span>
                        </div>
                        <div className="w-[1px] h-8 bg-zinc-800 hidden sm:block" />
                        <div className="flex flex-col items-center gap-2">
                            <Music className="text-pink-500" size={20} />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{t('footer.composition')}</span>
                        </div>
                        <div className="w-[1px] h-8 bg-zinc-800 hidden sm:block" />
                        <div className="flex flex-col items-center gap-2">
                            <Disc className="text-pink-500" size={20} />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{t('footer.performance')}</span>
                        </div>
                        <div className="w-[1px] h-8 bg-zinc-800 hidden sm:block" />
                        <a
                            href="https://www.instagram.com/vilasonmusic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 group"
                        >
                            <Instagram className="text-pink-500 group-hover:scale-110 transition-transform" size={20} />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-pink-400 group-hover:text-pink-300 font-bold transition-colors">@vilasonmusic</span>
                        </a>
                    </div>
                </section>
            </FadeIn>
        </main>
    );
}
