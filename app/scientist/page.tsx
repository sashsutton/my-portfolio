import { Navbar } from "../components/Navbar";
import { Github, Youtube, ExternalLink, Terminal, BrainCircuit, Code2, Microscope } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";


const techStack = {
    languages: ["Python", "TypeScript", "C++", "SQL"],
    ai_ml: ["PyTorch", "TensorFlow", "NumPy", "Pandas"],
    tools: ["Docker", "AWS", "Git", "Next.js"]
};

const projects = [
    {
        title: "Neural Network Architect",
        desc: "A custom deep learning framework built to understand backpropagation math.",
        tech: ["Python", "NumPy"],
        link: "#"
    },
    {
        title: "Logic & Algorithm Visualizer",
        desc: "Interactive tool for visualizing complex graph theory and search algorithms.",
        tech: ["TypeScript", "Three.js"],
        link: "#"
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
                                    <ExternalLink size={18} className="text-zinc-600" />
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