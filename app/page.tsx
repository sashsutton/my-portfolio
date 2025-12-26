import { Scene } from "./components/Scene";
import { Navbar } from "./components/Navbar";
import { StarBackground } from "./components/StarBackground";
import Image from "next/image";
import Link from "next/link";
import { Music, Binary, ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen text-white selection:bg-indigo-500/30">
            <StarBackground />
            <Navbar />

            {/* 1. Hero Landing */}
            <section className="h-[90vh] flex flex-col lg:flex-row items-center px-6 lg:px-24">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-7xl font-black tracking-tighter italic">Dual Nature.</h1>
                    <p className="text-zinc-400 text-xl max-w-md leading-relaxed">
                        Math & CS Student by day. <br />
                        Music Producer & Sound Engineer by night.
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
                        <h2 className="text-4xl font-bold italic">I'm Sasha.</h2>

                        <p className="text-zinc-400 text-lg">
                            I study the logic of the universe through <strong>Mathematics</strong> and the architecture
                            of systems through <strong>Computer Science</strong>. But my journey started with a
                            Bachelor's in <strong>Music Production & Sound Engineering</strong>.
                        </p>

                        <p className="text-zinc-400 text-lg">
                            I didn’t leave music because I was finished with it, I left because I wanted to go deeper.
                            From sound waves and signal chains, I became fascinated by the underlying systems:
                            the frameworks, abstractions, and logic that power the modern world.
                        </p>

                        <p className="text-zinc-400 text-lg">
                            That curiosity led me to a degree in <strong>Mathematics and Computer Science</strong>,
                            where I shifted from using technology to <strong>architecting it</strong>.
                            Today, I enjoy building robust backend systems, exploring AI-driven tools,
                            and solving complex problems that scale beyond the individual.
                        </p>

                        <p className="text-zinc-400 text-lg">
                            I thrive in fast-moving environments that demand adaptability, deep thinking,
                            and long-term vision, whether that means switching contexts between low-level systems
                            and AI pipelines, or applying the same endurance I train through cycling and data-driven
                            sports analysis to ambitious engineering projects.
                        </p>

                        <p className="text-zinc-400 text-lg">
                            I’m looking for more than a job, I’m looking for a <strong>mission</strong>.
                            If you’re building something that challenges the status quo,
                            I bring creativity, mathematical rigor, and the grit to ship code that matters.
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
                    <h2 className="text-4xl font-black group-hover:tracking-widest transition-all">THE CREATIVE</h2>
                    <p className="mt-4 text-zinc-500 text-sm">Artist, Sound Engineer, Performer</p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all">
                        Enter Studio <ArrowRight size={14} />
                    </div>
                </Link>

                {/* Scientist Side */}
                <Link href="/scientist" className="group relative flex flex-col items-center justify-center overflow-hidden bg-zinc-950/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Binary size={60} className="text-zinc-700 group-hover:text-indigo-500 transition-colors mb-6" />
                    <h2 className="text-4xl font-black group-hover:tracking-widest transition-all">THE SCIENTIST</h2>
                    <p className="mt-4 text-zinc-500 text-sm">CS Student, Content Creator, Developer</p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all">
                        Explore Research <ArrowRight size={14} />
                    </div>
                </Link>

            </section>
        </main>
    );
}