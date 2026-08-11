import React from "react";
import { TestTube2, Code2 } from "lucide-react";

const ThreeSelectionBox = React.forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <div className="absolute inset-0 flex items-center text-display justify-center pointer-events-none z-20">
      <div
        ref={ref}
        className={
          "invisible pointer-events-auto flex flex-col items-center justify-center gap-8 p-6 md:p-16 max-w-3xl w-[90%] " +
          "bg-background/90 backdrop-blur-xl rounded-3xl border border-foreground/10 shadow-2xl"
        }
      >
        <h3 className="text-2xl md:text-4xl font-bold text-display text-center tracking-wide">
          ¿Qué perfil querés explorar?
        </h3>

        <div className="flex flex-col md:flex-row gap-6 w-full mt-4">
          <a
            href="/work"
            className="group flex-1 flex flex-col items-center gap-3 py-6 px-4 bg-foreground/5 hover:bg-foreground/10 
                       border border-foreground/10 hover:border-foreground/30 rounded-2xl transition-all duration-300
                       hover:-translate-y-2 shadow-lg"
          >
            <div className="p-4 bg-blue-500/20 text-blue-500 dark:text-blue-400 rounded-full group-hover:scale-110 transition-transform duration-300">
              <TestTube2 size={32} />
            </div>
            <span className="text-xl font-semibold text-foreground">
              QA Automation
            </span>
            <span className="text-sm text-foreground/60 text-center">
              Testing E2E, API & Agentic QA
            </span>
          </a>

          <a
            href="/work"
            className="group flex-1 flex flex-col items-center gap-3 py-6 px-4 bg-foreground/5 hover:bg-foreground/10 
                       border border-foreground/10 hover:border-foreground/30 rounded-2xl transition-all duration-300
                       hover:-translate-y-2 shadow-lg"
          >
            <div className="p-4 bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Code2 size={32} />
            </div>
            <span className="text-xl font-semibold text-foreground">
              Frontend Developer
            </span>
            <span className="text-sm text-foreground/60 text-center">
              React, TypeScript & Arquitectura
            </span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default ThreeSelectionBox;
