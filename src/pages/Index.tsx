import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registramos el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Extraemos el texto
const bioText =
  "Vivo en la ciudad de Buenos Aires, Argentina, y me considero una persona que disfruta de estar siempre en movimiento. Mi gran pasión es el deporte, muy especialmente la práctica de acrobacias, donde encuentro el espacio ideal para entrenar, divertirme y superarme a nivel físico. Por otro lado, tengo un compromiso muy profundo con los animales, ya que soy un firme defensor de sus derechos. Ese amor lo vivo todos los días compartiendo mi rutina junto a mi hermosa familia perruna. Ellos son mi mayor cable a tierra y mi compañía favorita para disfrutar de las cosas simples de la vida. ";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  const initialImages = projects.slice(0, 10).map((p) => p.coverImage);
  const [currentImages, setCurrentImages] = useState(initialImages);

  // Guardamos qué índices específicos están haciendo el "fade out"
  const [fadingIndices, setFadingIndices] = useState<number[]>([]);

  // Efecto para intercambiar 2 imágenes al azar
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Elegimos dos índices aleatorios distintos entre 0 y 9
      const idx1 = Math.floor(Math.random() * 10);
      let idx2 = Math.floor(Math.random() * 1);

      // Nos aseguramos de que no sean el mismo índice
      while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * 10);
      }

      // 2. Iniciamos el desvanecimiento (fade out) solo en esas dos imágenes
      setFadingIndices([idx1, idx2]);

      // 3. Esperamos a que termine el fade para intercambiarlas
      setTimeout(() => {
        setCurrentImages((prev) => {
          const newImages = [...prev];
          // Guardamos temporalmente la imagen 1, y cruzamos los datos
          const temp = newImages[idx1];
          newImages[idx1] = newImages[idx2];
          newImages[idx2] = temp;
          return newImages;
        });

        // 4. Limpiamos los índices para que vuelvan a aparecer (fade in)
        setFadingIndices([]);
      }, 500); // 500ms (lo mismo que dura la transición CSS)
    }, 3500); // Intercambia imágenes cada 3.5 segundos

    return () => clearInterval(interval);
  }, []);

  // Efecto de GSAP para el scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
      })
        .fromTo(
          bioRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.5",
        )
        .fromTo(
          ".bio-char",
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.02,
            duration: 0.1,
          },
          "-=0.2",
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
        {/* Background Grid */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 80}px, ${-mousePosition.y * 80}px)`,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-10 p-6 md:p-16 w-full max-w-8xl">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt=""
                  // Evaluamos si ESTE índice en particular está dentro de fadingIndices
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
        </div>

        {/* Bio */}
        <div
          ref={bioRef}
          className="absolute bottom-8 md:bottom-12 p-4 mx-4 z-10 lg:w-full lg:p-8 opacity-0 bg-background/10 backdrop-blur-md rounded-3xl border border-foreground/10"
        >
          <h2 className="font-bold mb-2 text-lg lg:text-3xl">Acerca de mí</h2>
          <p className="text-sm md:text-base w-full max-w-2xl font-sans text-foreground/90 leading-relaxed lg:text-lg">
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
