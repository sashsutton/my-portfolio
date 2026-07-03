import { Navbar } from "../components/Navbar";
import {
    Github, Linkedin, Mail, ExternalLink, Terminal, BrainCircuit, Code2,
    Braces, FileText, GraduationCap, Trophy, MapPin, FlaskConical
} from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";
import { Link as LocaleLink } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

const techStack = {
    ai_ml: ["PyTorch", "NumPy", "Hugging Face", "Scikit-learn", "OpenCV", "MediaPipe", "RAG", "Topic Modelling"],
    tools: ["FastAPI", "Next.js", "React", "Docker", "Git", "PostgreSQL", "MongoDB", "Supabase", "AWS S3"],
    languages: ["Python", "C", "TypeScript", "Java", "SQL", "LaTeX"]
};

const projectsData = [
    {
        key: "neural_vision",
        tech: ["React", "Three.js", "Python", "FastAPI", "NumPy"],
        link: "https://neural-network-numbers.vercel.app/",
        github: "https://github.com/sashsutton/neural-network-numbers"
    },
    {
        key: "ml_library",
        tech: ["C", "CMake"],
        github: "https://github.com/sashsutton/ML_library"
    },
    {
        key: "vector_search",
        tech: ["Python", "FastAPI", "Sentence-Transformers", "React"],
        link: "https://vector-search-engine-frontend.vercel.app/",
        github: "https://github.com/sashsutton/vector-search-engine"
    },
    {
        key: "air_harp",
        tech: ["Python", "MediaPipe", "OpenCV", "Pygame"],
        github: "https://github.com/sashsutton/computer_vision_air_harp"
    },
    {
        key: "koda_marketplace",
        tech: ["Next.js 16", "TypeScript", "MongoDB", "Stripe Connect", "AWS S3", "Redis"],
        link: "https://www.kodas.works",
        github: "https://github.com/Koda-lab/koda-web-app"
    }
];

const experienceData = [
    { key: "lis", research: true },
    { key: "micron" },
    { key: "vista" },
    { key: "fabric", creative: true }
];

const educationData = ["m1", "math", "bsc", "ba"];

const HAL_URL = "https://hal.science/hal-05628568";

function SectionTitle({ index, children }: { index: string, children: React.ReactNode }) {
    return (
        <h2 className="flex items-center gap-4 mb-12">
            <span className="text-indigo-500 text-sm">[{index}]</span>
            <span className="text-2xl lg:text-3xl font-bold text-white">{children}</span>
            <span className="flex-1 h-px bg-zinc-900" />
        </h2>
    );
}

export default function Scientist() {
    const t = useTranslations('Scientist');
    const currentYear = new Date().getFullYear();

    return (
        <main className="min-h-screen bg-black text-zinc-300 font-mono">
            <Navbar />

            {/* Header */}
            <FadeIn>
                <section className="px-6 lg:px-24 py-20 border-b border-zinc-900">
                    <div className="flex items-center gap-2 text-indigo-500 mb-4">
                        <Terminal size={20} />
                        <span className="text-sm tracking-widest uppercase">{t('header.log', { year: currentYear })}</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                        {t.rich('header.title', { highlight: (chunks) => <span className="text-indigo-500">{chunks}</span> })}
                    </h1>
                    <p className="max-w-2xl text-zinc-400 font-sans text-lg">
                        {t('header.description')}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-xs text-zinc-300">
                            <GraduationCap size={14} className="text-indigo-500" /> {t('header.badges.degree')}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-xs text-zinc-300">
                            <Trophy size={14} className="text-amber-400" /> {t('header.badges.hackathon')}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-xs text-zinc-300">
                            <MapPin size={14} className="text-indigo-500" /> {t('header.badges.location')}
                        </span>
                    </div>

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors group"
                    >
                        <FileText size={20} />
                        {t('header.downloadCV')}
                    </a>
                </section>
            </FadeIn>

            {/* Research */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-16">
                    <SectionTitle index="01">{t('research.title')}</SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Publication — BibTeX card */}
                        <div className="lg:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden flex flex-col">
                            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-900 bg-black/40">
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                                <span className="ml-3 text-[11px] text-zinc-600">sutton2026.bib — {t('research.publication.label')}</span>
                            </div>
                            <pre className="p-6 text-[11px] sm:text-xs leading-relaxed overflow-x-auto flex-1">
<code><span className="text-pink-400">@article</span><span className="text-zinc-600">{"{"}</span><span className="text-indigo-300">sutton2026retropropagation</span><span className="text-zinc-600">,</span>{"\n"}
{"  "}<span className="text-zinc-500">author</span>      <span className="text-zinc-600">=</span> <span className="text-emerald-300">{"{Sutton, Sasha}"}</span><span className="text-zinc-600">,</span>{"\n"}
{"  "}<span className="text-zinc-500">title</span>       <span className="text-zinc-600">=</span> <span className="text-emerald-300">{"{De la propagation avant à la rétropropagation :"}</span>{"\n"}
{"                 "}<span className="text-emerald-300">{"une analyse des mécanismes d'apprentissage"}</span>{"\n"}
{"                 "}<span className="text-emerald-300">{"dans les réseaux de neurones multicouches}"}</span><span className="text-zinc-600">,</span>{"\n"}
{"  "}<span className="text-zinc-500">institution</span> <span className="text-zinc-600">=</span> <span className="text-emerald-300">{"{Aix-Marseille Université}"}</span><span className="text-zinc-600">,</span>{"\n"}
{"  "}<span className="text-zinc-500">year</span>        <span className="text-zinc-600">=</span> <span className="text-emerald-300">{"{2026}"}</span><span className="text-zinc-600">,</span>{"\n"}
{"  "}<span className="text-zinc-500">url</span>         <span className="text-zinc-600">=</span> <span className="text-emerald-300">{"{hal.science/hal-05628568}"}</span>{"\n"}
<span className="text-zinc-600">{"}"}</span></code>
                            </pre>
                            <div className="px-6 pb-6">
                                <a
                                    href={HAL_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                                >
                                    {t('research.publication.link')} <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Current focus */}
                        <div className="lg:col-span-2 p-8 rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col">
                            <FlaskConical className="text-indigo-500 mb-4" />
                            <h3 className="text-white font-bold mb-3">{t('research.focus.label')}</h3>
                            <p className="text-zinc-400 text-sm font-sans leading-relaxed flex-1">
                                {t('research.focus.desc')}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                                {["NLP", "Computer Vision", "RAG", "Topic Modelling", "Neural Networks"].map(tag => (
                                    <span key={tag} className="text-[10px] bg-black px-2 py-1 rounded text-indigo-300 border border-indigo-500/20">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Experience */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-16">
                    <SectionTitle index="02">{t('experience.title')}</SectionTitle>

                    <div className="relative border-l border-zinc-800 ml-1 space-y-12">
                        {experienceData.map((e) => (
                            <div key={e.key} className="relative pl-8">
                                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-indigo-500 ring-4 ring-indigo-500/10" />
                                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                    <h3 className="text-white font-bold">{t(`experience.items.${e.key}.role`)}</h3>
                                    <span className="text-indigo-400 text-sm">{t(`experience.items.${e.key}.org`)}</span>
                                    <span className="text-zinc-600 text-xs sm:ml-auto">{t(`experience.items.${e.key}.date`)}</span>
                                </div>
                                <p className="text-zinc-400 text-sm font-sans mt-2 max-w-3xl leading-relaxed">
                                    {t(`experience.items.${e.key}.desc`)}
                                </p>
                                {e.creative && (
                                    <LocaleLink href="/creative" className="inline-block mt-3 text-xs text-pink-400 hover:text-pink-300 transition-colors">
                                        {t('experience.creativeLink')}
                                    </LocaleLink>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            {/* Projects */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-16">
                    <SectionTitle index="03">{t('projects.title')}</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectsData.map((p) => (
                            <div key={p.key} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-all group flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{t(`projects.items.${p.key}.title`)}</h3>
                                    <div className="flex gap-3 shrink-0 ml-4">
                                        {p.link && (
                                            <Link href={p.link} target="_blank">
                                                <ExternalLink size={20} className="text-zinc-500 hover:text-indigo-400 transition-colors" />
                                            </Link>
                                        )}
                                        <Link href={p.github} target="_blank">
                                            <Github size={20} className="text-zinc-500 hover:text-indigo-400 transition-colors" />
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-zinc-400 text-sm font-sans mb-6 flex-1">{t(`projects.items.${p.key}.desc`)}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map(tag => <span key={tag} className="text-[10px] bg-black px-2 py-1 rounded text-indigo-300 border border-indigo-500/20">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            {/* Skills Grid */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-16">
                    <SectionTitle index="04">{t('skills.title')}</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
                            <BrainCircuit className="text-indigo-500 mb-4" />
                            <h3 className="text-white font-bold mb-4">{t('skills.ai_math')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.ai_ml.map(s => <span key={s} className="text-[10px] border border-zinc-800 px-2 py-1 rounded">{s}</span>)}
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
                            <Code2 className="text-indigo-500 mb-4" />
                            <h3 className="text-white font-bold mb-4">{t('skills.development')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.tools.map(s => <span key={s} className="text-[10px] border border-zinc-800 px-2 py-1 rounded">{s}</span>)}
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
                            <Braces className="text-indigo-500 mb-4" />
                            <h3 className="text-white font-bold mb-4">{t('skills.languages')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.languages.map(s => <span key={s} className="text-[10px] border border-zinc-800 px-2 py-1 rounded">{s}</span>)}
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Education */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-16">
                    <SectionTitle index="05">{t('education.title')}</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {educationData.map((key) => (
                            <div key={key} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 flex flex-col">
                                <GraduationCap className="text-indigo-500 mb-4" size={20} />
                                <span className="text-zinc-600 text-xs mb-2">{t(`education.items.${key}.date`)}</span>
                                <h3 className="text-white font-bold text-sm leading-snug mb-1">{t(`education.items.${key}.degree`)}</h3>
                                <p className="text-indigo-400 text-xs mb-3">{t(`education.items.${key}.school`)}</p>
                                <p className="text-zinc-500 text-xs font-sans mt-auto">{t(`education.items.${key}.note`)}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            {/* Contact footer */}
            <FadeIn delay={0.1}>
                <footer className="px-6 lg:px-24 py-20 border-t border-zinc-900 flex flex-col items-center text-center gap-6">
                    <p className="text-zinc-500 text-sm font-sans">{t('contact.line')}</p>
                    <a
                        href="mailto:sashasuttons3@icloud.com"
                        className="text-xl sm:text-3xl font-bold text-white hover:text-indigo-400 transition-colors break-all"
                    >
                        sashasuttons3@icloud.com
                    </a>
                    <div className="flex gap-6 mt-2">
                        <a href="https://github.com/sashsutton" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-400 transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/sashasutton4/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
                        <a href="mailto:sashasuttons3@icloud.com" className="text-zinc-500 hover:text-indigo-400 transition-colors"><Mail size={20} /></a>
                    </div>
                    <p className="text-[10px] text-zinc-700 mt-6">{t('contact.tagline', { year: currentYear })}</p>
                </footer>
            </FadeIn>
        </main>
    );
}
