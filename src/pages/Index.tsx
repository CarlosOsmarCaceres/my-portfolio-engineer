import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registramos el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Extraemos el texto para poder iterarlo fácilmente
const bioText =
  "Vivo en la ciudad de Buenos Aires, Argentina, y me considero una persona que disfruta de estar siempre en movimiento. Mi gran pasión es el deporte, muy especialmente la práctica de acrobacias, donde encuentro el espacio ideal para entrenar, divertirme y superarme a nivel físico. Por otro lado, tengo un compromiso muy profundo con los animales, ya que soy un firme defensor de sus derechos. Ese amor lo vivo todos los días compartiendo mi rutina junto a mi hermosa familia perruna. Ellos son mi mayor cable a tierra y mi compañía favorita para disfrutar de las cosas simples de la vida. ";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  const gridImages = projects.slice(0, 10).map((p) => p.coverImage);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Extendemos un poco la zona de scroll para que la animación de texto tenga buen ritmo
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

        // 2. El contenedor de la bio entra desde abajo (solo el contenedor y el H2)
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5",
        )

        // 3. Animación letra por letra (Stagger)
        .fromTo(
          ".bio-char",
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.9, // Retraso entre cada letra (acá ocurre la magia)
            duration: 0.1,
          },
          "-=0.2", // Empieza un poco antes de que el contenedor termine de subir
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
        className="relative h-screen overflow-hidden bg-background/10 backdrop-blur-sm"
      >
        {/* Image Grid Background with Parallax */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out "
          style={{
            transform: `translate(${-mousePosition.x * 80}px, ${-mousePosition.y * 80}px)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 p-12 md:p-16 w-full max-w-8xl">
            {gridImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/30" />

        {/* Centered Title */}
        <div
          ref={titleRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 "
        >
          <h1 className="text-5xl text-center sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground">
            Carlos Osmar Caceres
          </h1>
        </div>

        {/* Bio */}
        <div
          ref={bioRef}
          className="absolute bottom-8 md:bottom-12 px-6  z-10 bg-  opacity-0 bg-background/10 backdrop-blur-sm"
        >
          <h2 className="font-bold mb-2">Acerca de mí</h2>
          <p className="text-sm md:text-4xl w-full font-sans text-foreground/80 leading-relaxed ">
            {/* Iteramos sobre cada carácter para poder animarlos por separado */}
            {bioText.split("").map((char, index) => (
              <span key={index} className="bio-char opacity-0">
                {char}
              </span>
            ))}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
