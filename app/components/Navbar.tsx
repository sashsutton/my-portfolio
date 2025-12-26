import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
            <Link href="/"><div className="text-xl font-bold tracking-tighter">MATH.CS</div></Link>
            <div className="flex gap-6">
                <a href="https://github.com/sashsutton" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/sashasutton4/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
                <a href="mailto:sashasuttons3@icloud.com" className="hover:text-indigo-400 transition-colors"><Mail size={20} /></a>
            </div>
        </nav>
    );
}
