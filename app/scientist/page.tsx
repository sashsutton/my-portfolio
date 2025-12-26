import { Navbar } from "../components/Navbar";
import { Github, Youtube, ExternalLink, Terminal, BrainCircuit, Code2, Microscope, FileText } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";


const techStack = {
    languages: ["Python", "TypeScript", "Java", "Go", "SQL"],
    ai_ml: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-learn", "OpenCV", "Reinforcement Learning"],
    tools: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Postgres", "Redis", "GraphQL", "Next.js"]
};

const projects = [
    {
        title: "Neural Vision 3D",
        desc: "A real-time 3D neural network visualizer built from scratch. Features an interactive drawing pad and a live Three.js representation of hidden layer activations and backpropagation results.",
        tech: ["React", "Three.js", "Python", "FastAPI", "NumPy"],
        link: "https://neural-network-numbers.vercel.app/",
        github: "https://github.com/sashsutton/neural-network-numbers"
    },
    {
        title: "Vector Search Engine",
        desc: "A high-performance semantic search engine built from scratch using Python, FastAPI, and Linear Algebra",
        tech: ["Python", "FastAPI", "React"],
        link: "https://vector-search-engine-frontend.vercel.app/",
        github: "https://github.com/sashsutton/vector-search-engine?tab=readme-ov-file"
    },
    {
        title: "Netflix Clone",
        desc: "A high-fidelity frontend clone of the Netflix interface, built to demonstrate mastery in Modern React, Advanced CSS/Tailwind, and Global State Management.",
        tech: ["Reac", "Typescript", "Tailwind CSS", "Zustand"],
        link: "https://netflix-clone-frontend-delta-ashen.vercel.app/",
        github: "https://github.com/sashsutton/netflix-clone-frontend?tab=readme-ov-file"
    }


];

export default function Scientist() {
    return (
        <main className="min-h-screen bg-black text-zinc-300 font-mono">
            <Navbar />

            {/* Header */}
            <FadeIn>
                <section className="px-6 lg:px-24 py-20 border-b border-zinc-900">
                    <div className="flex items-center gap-2 text-indigo-500 mb-4">
                        <Terminal size={20} />
                        <span className="text-sm tracking-widest uppercase">Research_Log_{new Date().getFullYear()}</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                        AI & <span className="text-indigo-500">Software</span> Engineering.
                    </h1>
                    <p className="max-w-2xl text-zinc-400 font-sans text-lg">
                        Focusing on the intersection of mathematical models and scalable architecture.
                        I build systems that think and tools that scale.
                    </p>

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors group"
                    >
                        <FileText size={20} />
                        Download CV
                    </a>
                </section>
            </FadeIn>



            {/* Skills Grid */}
            <FadeIn delay={0.1}>
                <section className="px-6 lg:px-24 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
                        <BrainCircuit className="text-indigo-500 mb-4" />
                        <h3 className="text-white font-bold mb-4">AI & Math</h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.ai_ml.map(s => <span key={s} className="text-[10px] border border-zinc-800 px-2 py-1 rounded">{s}</span>)}
                        </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
                        <Code2 className="text-indigo-500 mb-4" />
                        <h3 className="text-white font-bold mb-4">Development</h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.tools.map(s => <span key={s} className="text-[10px] border border-zinc-800 px-2 py-1 rounded">{s}</span>)}
                        </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
                        <Microscope className="text-indigo-500 mb-4" />
                        <h3 className="text-white font-bold mb-4">Languages</h3>
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
                        <Github className="text-indigo-500" /> Compiled_Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((p, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{p.title}</h3>
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
                                <p className="text-zinc-400 text-sm font-sans mb-6">{p.desc}</p>
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