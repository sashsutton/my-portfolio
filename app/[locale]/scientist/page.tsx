import { Navbar } from "../components/Navbar";
import { Github, Youtube, ExternalLink, Terminal, BrainCircuit, Code2, Microscope, FileText } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";
import { useTranslations } from "next-intl";


const techStack = {
    languages: ["Python", "TypeScript", "Java", "Go", "SQL"],
    ai_ml: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-learn", "OpenCV", "Reinforcement Learning"],
    tools: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Postgres", "Redis", "GraphQL", "Next.js"]
};

const projectsData = [
    {
        key: "neural_vision",
        tech: ["React", "Three.js", "Python", "FastAPI", "NumPy"],
        link: "https://neural-network-numbers.vercel.app/",
        github: "https://github.com/sashsutton/neural-network-numbers"
    },
    {
        key: "vector_search",
        tech: ["Python", "FastAPI", "React"],
        link: "https://vector-search-engine-frontend.vercel.app/",
        github: "https://github.com/sashsutton/vector-search-engine?tab=readme-ov-file"
    },
    {
        key: "netflix_clone",
        tech: ["React", "Typescript", "Tailwind CSS", "Zustand"],
        link: "https://sashflix-clone-frontend-delta-ashen.vercel.app/",
        github: "https://github.com/sashsutton/netflix-clone-frontend?tab=readme-ov-file"
    },
    {
        key: "air_harp",
        tech: ["React", "TypeScript", "MediaPipe", "OpenCV"],
        github: "https://github.com/sashsutton/computer_vision_air_harp?tab=readme-ov-file"
    }

];

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



            {/* Skills Grid */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        <Microscope className="text-indigo-500 mb-4" />
                        <h3 className="text-white font-bold mb-4">{t('skills.languages')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.languages.map(s => <span key={s} className="text-[10px] border border-zinc-800 px-2 py-1 rounded">{s}</span>)}
                        </div>
                    </div>
                </section>

            </FadeIn>


            {/* Projects */}
            <FadeIn delay={0.2}>
                <section className="px-6 lg:px-24 py-16">
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                        <Github className="text-indigo-500" /> {t('projects.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectsData.map((p, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{t(`projects.items.${p.key}.title`)}</h3>
                                    <div className="flex gap-3">
                                        {p.link && p.link.trim() !== "" && (
                                            <Link href={p.link} target="_blank">
                                                <ExternalLink size={20} className="text-zinc-500 hover:text-indigo-400 transition-colors" />
                                            </Link>
                                        )}
                                        <Link href={p.github} target="_blank">
                                            <Github size={20} className="text-zinc-500 hover:text-indigo-400 transition-colors" />
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-zinc-400 text-sm font-sans mb-6">{t(`projects.items.${p.key}.desc`)}</p>
                                <div className="flex gap-2">
                                    {p.tech.map(t => <span key={t} className="text-[10px] bg-black px-2 py-1 rounded text-indigo-300 border border-indigo-500/20">{t}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </FadeIn>
        </main>
    );
}