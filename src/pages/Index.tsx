import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { photo } from "@/data/photo";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import ThreeSelectionBox from "@/components/ThreeSelectionBox";

// Registramos el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Extraemos el texto
const bioText =
  "Vivo en la ciudad de Buenos Aires, Argentina, y me considero una persona que disfruta de estar siempre en movimiento. Mi gran pasión es el deporte, muy especialmente la práctica de acrobacias, donde encuentro el espacio ideal para entrenar, divertirme y superarme a nivel físico. Por otro lado, tengo un compromiso muy profundo con los animales, ya que soy un firme defensor de sus derechos. Ese amor lo vivo todos los días compartiendo mi rutina junto a mi hermosa familia perruna. Ellos son mi mayor cable a tierra y mi compañía favorita para disfrutar de las cosas simples de la vida. ";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Refs de todos los elementos a animar
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const selectionBoxRef = useRef<HTMLDivElement>(null);

  const initialImages = photo.slice(0, 10).map((p) => p.coverImage);
  const [currentImages, setCurrentImages] = useState(initialImages);
  const [fadingIndices, setFadingIndices] = useState<number[]>([]);

  // Efecto para intercambiar 2 imágenes al azar
  useEffect(() => {
    const interval = setInterval(() => {
      const idx1 = Math.floor(Math.random() * 10);
      let idx2 = Math.floor(Math.random() * 10);

      while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * 10);
      }

      setFadingIndices([idx1, idx2]);

      setTimeout(() => {
        setCurrentImages((prev) => {
          const newImages = [...prev];
          const temp = newImages[idx1];
          newImages[idx1] = newImages[idx2];
          newImages[idx2] = temp;
          return newImages;
        });
        setFadingIndices([]);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Efecto de GSAP: Toda la película en una sola escena
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Se extiende el scroll para acomodar toda la secuencia
          scrub: 1,
          pin: true,
        },
      });

      // 1. El título desaparece y sube
      tl.to(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
      })
        // 2. Entra el contenedor de la bio
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5",
        )
        // 3. Entra el texto de la bio letra por letra
        .fromTo(
          ".bio-char",
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.02,
            duration: 1.5,
          },
          "-=0.2",
        )
        // 4. PAUSA ACTIVA: Agregamos un espacio para que el usuario pueda leer mientras scrollea
        .to({}, { duration: 0.5 })
        // 5. La biografía se desvanece y sube un poquito
        .to(bioRef.current, { opacity: 0, y: -30, duration: 1 })
        // 6. El cuadro 3D se levanta desde el fondo (usamos autoAlpha para evitar que sea clickeable antes de tiempo)
        .fromTo(
          selectionBoxRef.current,
          {
            autoAlpha: 0,
            rotationX: -80, // Acostado hacia atrás
            z: -800, // Lejos en la perspectiva
            scale: 0.7,
          },
          {
            autoAlpha: 1,
            rotationX: 0, // De frente
            z: 0,
            scale: 1,
            duration: 2,
            ease: "power8.out",
          },
          "-=0.5", // Arranca un poquito antes de que termine de desaparecer la bio
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = (e.clientX - rect.left - centerX) / centerX;
    const y = (e.clientY - rect.top - centerY) / centerY;
    setMousePosition({ x, y });
  };

  return (
    <Layout hideFooter noPadding>
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        // Agregamos 'perspective' al contenedor principal para que el 3D funcione en los hijos
        className="relative h-screen overflow-hidden bg-background/10 backdrop-blur-sm"
        style={{ perspective: "1200px" }}
      >
        {/* Background Grid */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 80}px, ${-mousePosition.y * 80}px)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 p-6 md:p-16 w-full max-w-8xl">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt=""
                  className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    fadingIndices.includes(index) ? "opacity-0" : "opacity-90"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-background/0" />

        {/* Title */}
        <div
          ref={titleRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
          <h1 className="text-5xl text-center sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground drop-shadow-md">
            Carlos Osmar Caceres
          </h1>
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-2 text-foreground/60 animate-bounce [animation-duration:3s]">
            <span className="text-xs font-sans tracking-[0.2em] uppercase">
              Scroll
            </span>
            <ChevronDown size={28} strokeWidth={1.5} />
          </div>
        </div>

        {/* Biography */}
        <div
          ref={bioRef}
          className="absolute bottom-8 md:bottom-12 p-4 mx-4 z-10 lg:w-full lg:p-8 opacity-0 bg-background/10 backdrop-blur-md rounded-3xl border border-foreground/10"
        >
          <h2 className="font-bold mb-2 text-lg lg:text-3xl">Un poco de mí</h2>
          <p className="text-sm md:text-base w-full max-w-2xl font-sans text-foreground/90 leading-relaxed lg:text-lg">
            {bioText.split("").map((char, index) => (
              <span key={index} className="bio-char opacity-0">
                {char}
              </span>
            ))}
          </p>
        </div>
        {/* 3D Selection Box (moved to component) */}
        <ThreeSelectionBox ref={selectionBoxRef} />
      </section>
    </Layout>
  );
};

export default Index;
