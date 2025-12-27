import { Navbar } from "../components/Navbar";
import { Music, Youtube, Instagram, Mic2, Sparkles, Disc } from "lucide-react";
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
                    Music Producer and Music Performer/DJ. Exploring the boundary between
                    analog warmth and digital precision.
                </p>
            </section>

            {/* Creative Bento Grid */}
            <section className="px-6 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

                {/* Bio Card */}
                <div className="md:col-span-2 md:row-span-2 p-10 rounded-[3rem] bg-zinc-900 border border-zinc-800 flex flex-col justify-end relative overflow-hidden group">
                    <Image
                        src="/dj_photo.jpg"
                        alt="DJ Performance"
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <Disc className="absolute -top-10 -right-10 text-zinc-800 group-hover:text-pink-500/20 transition-colors duration-700 z-10" size={300} />
                    <h2 className="text-3xl font-bold mb-4 relative z-10">Performance & Production</h2>
                    <p className="text-zinc-400 leading-relaxed font-light relative z-10">
                        With a Bachelor's in Sound Engineering, I specialise in creating
                        immersive auditory experiences. I used to work as a Live sound engineer
                        at the club Fabric in London.
                    </p>
                </div>

                {/* Youtube Card */}
                <a href="https://www.youtube.com/watch?v=bTA1Srxxnmc" target="_blank" className="p-8 rounded-[3rem] bg-red-950/10 border border-red-900/20 flex flex-col justify-between hover:bg-red-950/20 transition-all">
                    <Youtube className="text-red-500" size={32} />
                    <div>
                        <h3 className="font-bold">YouTube</h3>
                        <p className="text-xs text-zinc-500">Music & Sound Design</p>
                    </div>
                </a>

                {/* Instagram Card */}
                <a href="https://www.instagram.com/vilasonmusic/" target="_blank" className="p-8 rounded-[3rem] bg-pink-950/10 border border-pink-900/20 flex flex-col justify-between hover:bg-pink-950/20 transition-all">
                    <Instagram className="text-pink-500" size={32} />
                    <h3 className="font-bold">Instagram</h3>
                </a>

                {/* Gear/Skills Wide Card */}
                <div className="md:col-span-3 p-8 rounded-[3rem] bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 flex items-center justify-around">
                    <div className="flex flex-col items-center gap-2">
                        <Mic2 className="text-pink-500" />
                        <span className="text-[10px] uppercase tracking-widest">Recording</span>
                    </div>
                    <div className="w-[1px] h-10 bg-zinc-800" />
                    <div className="flex flex-col items-center gap-2">
                        <Music className="text-pink-500" />
                        <span className="text-[10px] uppercase tracking-widest">Composition</span>
                    </div>
                </div>
            </section>
        </main>
    );
}