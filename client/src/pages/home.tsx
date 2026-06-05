import { useState } from "react";
import bgGif from "@assets/tumblr_e86c1cffadd1adc1f6ad6179bff1384c_865b51c8_500_1768249468804.webp";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"main" | "about">("main");

  return (
    <div 
      className="min-h-screen w-full bg-black flex flex-col items-center pt-12 p-8 relative overflow-hidden"
      data-testid="home-page"
    >
      <img 
        src={bgGif} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      <h1 
        className="text-white text-4xl font-bold tracking-wider mb-8 relative z-10"
        style={{ fontFamily: "'Playfair Display', serif" }}
        data-testid="title"
      >
        Trsque
      </h1>
      
      <div 
        className="w-full max-w-md aspect-[3/2] bg-black rounded-2xl border-2 border-[#b4b4b4] glow-border-strong relative z-10 flex flex-col items-center justify-center p-6"
        data-testid="frame-container"
      >
        {activeTab === "main" ? (
          <div className="flex flex-col items-center gap-5">
            <p className="text-white/80 text-sm tracking-wide" style={{ fontFamily: "'Comfortaa', cursive" }}>
              about me
            </p>
            <p className="text-white text-lg text-center leading-relaxed" style={{ fontFamily: "'Comfortaa', cursive" }}>
              Hi! I'm a beginner developer, writing parsers/scripts
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#3776ab]/20 rounded-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" />
                <span className="text-white text-sm font-medium">Python</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#00599c]/20 rounded-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6" />
                <span className="text-white text-sm font-medium">C++</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#68217a]/20 rounded-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-6 h-6" />
                <span className="text-white text-sm font-medium">C#</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5">
            <p className="text-white text-2xl font-medium" style={{ fontFamily: "'Comfortaa', cursive" }}>Contacts</p>
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/TrsqueWork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0088cc]/20 hover:bg-[#0088cc]/30 rounded-lg transition-all"
                data-testid="telegram-link"
              >
                <svg className="w-6 h-6 fill-[#0088cc]" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.91-1.27 4.85-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <span className="text-white text-sm font-medium">Telegram</span>
              </a>
              <a
                href="https://github.com/YoullNeverKnowMefr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                data-testid="github-link"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 invert" />
                <span className="text-white text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
      
      <button
        onClick={() => setActiveTab(activeTab === "main" ? "about" : "main")}
        className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full border border-white/30 transition-all duration-300 relative z-10 backdrop-blur-sm"
        style={{ fontFamily: "'Comfortaa', cursive" }}
        data-testid="tab-button"
      >
        {activeTab === "main" ? "Contacts" : "Back"}
      </button>

      <p
        className="mt-auto pt-8 text-white/50 text-xs relative z-10"
        style={{ fontFamily: "'Comfortaa', cursive" }}
      >
        сайт сделан{" "}
        <a
          href="https://t.me/TrsqueWork"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/70 transition-colors"
        >
          tg:@Trsquework
        </a>
      </p>
    </div>
  );
}
