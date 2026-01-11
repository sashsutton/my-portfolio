import { Navbar } from "../components/Navbar";
import { Music, Instagram, Mic2, Sparkles, Disc, Headphones, Radio, Share2 } from "lucide-react";
import Image from "next/image";

export default function Creative() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="px-6 lg:px-24 py-20 text-center">
                <Sparkles className="mx-auto text-pink-500 mb-6" size={40} />
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                    SONIC ARTISTRY.
                </h1>
                <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
                    Music Producer and Performer. Bridging the gap between
                    London's underground club culture and digital sound innovation.
                </p>
            </section>

            {/* Reorganized Bento Grid */}
            <section className="px-6 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">

                {/* Main Performance/Bio Card */}
                <div className="md:col-span-2 md:row-span-2 p-10 rounded-[3rem] bg-zinc-900 border border-zinc-800 flex flex-col justify-end relative overflow-hidden group">
                    <Image
                        src="/dj_photo.jpg"
                        alt="DJ Performance"
                        fill
                        className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/50 rounded-full text-[10px] font-bold tracking-widest uppercase">Experience</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Live Sound & Performance</h2>
                        <p className="text-zinc-400 leading-relaxed font-light">
                            With a Bachelor's in Sound Engineering, I've spent years behind the booth and the console.
                            My time as a Live Sound Engineer at <span className="text-white font-medium">Fabric London</span> shaped my understanding of acoustic space and high-fidelity reinforcement.
                        </p>
                    </div>
                </div>

                {/* Featured Set Centerpiece */}
                <div className="md:col-span-2 md:row-span-2 rounded-[3rem] overflow-hidden border border-zinc-800 bg-black group relative">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/bTA1Srxxnmc"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Technical Skills */}
                <div className="md:col-span-1 p-8 rounded-[3rem] bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                    <Headphones className="text-pink-500" size={28} />
                    <div>
                        <h3 className="font-bold text-sm">Mixing & Mastering</h3>
                        <p className="text-xs text-zinc-500 mt-1">Analog-summed workflows for modern digital releases.</p>
                    </div>
                </div>

                {/* Sound Design Detail */}
                <div className="md:col-span-1 p-8 rounded-[3rem] bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                    <Radio className="text-pink-500" size={28} />
                    <div>
                        <h3 className="font-bold text-sm">Sound Design</h3>
                        <p className="text-xs text-zinc-500 mt-1">Custom synthesis and foley for immersive media.</p>
                    </div>
                </div>

                {/* Instagram Social */}
                <a href="https://www.instagram.com/vilasonmusic/" target="_blank" className="md:col-span-1 p-8 rounded-[3rem] bg-pink-950/5 border border-pink-900/20 flex flex-col justify-between hover:bg-pink-950/20 transition-all">
                    <Instagram className="text-pink-500" size={28} />
                    <div>
                        <h3 className="font-bold text-sm">Instagram</h3>
                        <p className="text-xs text-zinc-500 mt-1">@vilasonmusic</p>
                    </div>
                </a>

                {/* Social Share / Connect */}
                <div className="md:col-span-1 p-8 rounded-[3rem] bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                    <Share2 className="text-pink-500" size={28} />
                    <div>
                        <h3 className="font-bold text-sm">Collaboration</h3>
                        <p className="text-xs text-zinc-500 mt-1">Open for global production and remix projects.</p>
                    </div>
                </div>

                {/* Capabilities Footer */}
                <div className="md:col-span-4 p-8 rounded-[3rem] bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-around backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-2">
                        <Mic2 className="text-pink-500" size={20} />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Recording</span>
                    </div>
                    <div className="w-[1px] h-8 bg-zinc-800" />
                    <div className="flex flex-col items-center gap-2">
                        <Music className="text-pink-500" size={20} />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Composition</span>
                    </div>
                    <div className="w-[1px] h-8 bg-zinc-800" />
                    <div className="flex flex-col items-center gap-2">
                        <Disc className="text-pink-500" size={20} />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Performance</span>
                    </div>
                </div>
            </section>
        </main>
    );
}