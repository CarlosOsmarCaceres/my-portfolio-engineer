import fluidArt01 from "@/assets/img-01.jpeg";
import fluidArt02 from "@/assets/img-02.jpeg";
import fluidArt03 from "@/assets/img-03.jpeg";
import fluidArt04 from "@/assets/img-04.jpeg";
import fluidArt05 from "@/assets/img-05.jpeg";
import fluidArt06 from "@/assets/img-06.jpeg";
import fluidArt07 from "@/assets/img-07.jpeg";
/* import fluidArt08 from "@/assets/img-08.jpeg"; */
import fluidArt09 from "@/assets/img-09.jpeg";
import fluidArt10 from "@/assets/img-10.jpeg";
import fluidArt11 from "@/assets/img-11.jpeg";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  description: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "neon-glow",
    title: "Neon Glow",
    category: "Photography",
    tags: ["PHOTOGRAPHY", "PORTRAIT"],
    year: "2024",
    client: "Gallery Moderne",
    description: "A striking exploration of light and skin, capturing the ethereal beauty of neon-lit portraiture with cosmic undertones and vibrant color spectrums.",
    coverImage: fluidArt01,
    images: [fluidArt01],
  },
  {
    id: "light-forms",
    title: "Light Forms",
    category: "Digital Art",
    tags: ["DIGITAL", "EXPERIMENTAL"],
    year: "2024",
    client: "Tech Futures Lab",
    description: "Exploring the intersection of human silhouette and abstract light painting. Each piece captures the dynamic tension between body and luminous energy.",
    coverImage: fluidArt02,
    images: [fluidArt02],
  },
  {
    id: "mystic-arcana",
    title: "Mystic Arcana",
    category: "Fine Art",
    tags: ["FINE ART", "ILLUSTRATION"],
    year: "2024",
    client: "Digital Arts Foundation",
    description: "A delicate study of Art Nouveau tarot imagery, blending traditional illustration with contemporary botanical arrangements and spiritual symbolism.",
    coverImage: fluidArt03,
    images: [fluidArt03],
  },
  {
    id: "prismatic-dreams",
    title: "Prismatic Dreams",
    category: "Photography",
    tags: ["PHOTOGRAPHY", "EXPERIMENTAL"],
    year: "2023",
    client: "Bloom Publishing",
    description: "Ethereal portrait series exploring identity through prismatic light distortion, creating otherworldly compositions that blur the line between reality and dream.",
    coverImage: fluidArt04,
    images: [fluidArt04],
  },
  {
    id: "digital-currents",
    title: "Digital Currents",
    category: "Digital Art",
    tags: ["DIGITAL", "INSTALLATION"],
    year: "2023",
    client: "Neon Collective",
    description: "Immersive digital projections capturing the flow of data and light, where human figures become conduits for streams of vibrant digital energy.",
    coverImage: fluidArt05,
    images: [fluidArt05],
  },
  {
    id: "chromatic-burst",
    title: "Chromatic Burst",
    category: "Fine Art",
    tags: ["FINE ART", "ABSTRACT"],
    year: "2023",
    client: "Independent",
    description: "Bold abstract expressionism exploring raw emotion through vivid color application and dynamic brushwork on textured canvas surfaces.",
    coverImage:   fluidArt06,
    images: [fluidArt06],
  },
  {
    id: "layered-depths",
    title: "Layered Depths",
    category: "Fine Art",
    tags: ["FINE ART", "MIXED MEDIA"],
    year: "2022",
    client: "Heritage Museum",
    description: "Complex layered compositions merging digital and traditional techniques, creating depth through overlapping textures and complementary color harmonies.",
    coverImage: fluidArt07,
    images: [fluidArt07],
  },
 /*  {
    id: "fluid-dynamics",
    title: "Fluid Dynamics",
    category: "Fine Art",
    tags: ["FINE ART", "EXPERIMENTAL"],
    year: "2022",
    client: "Art Basel",
    description: "Mesmerizing fluid art exploring the organic flow of pigments, capturing moments of chaos and harmony in vibrant turquoise and magenta compositions.",
    coverImage: fluidArt08,
    images: [fluidArt08],
  }, */
  {
    id: "fluid-dynamics",
    title: "Fluid Dynamics",
    category: "Fine Art",
    tags: ["FINE ART", "EXPERIMENTAL"],
    year: "2022",
    client: "Art Basel",
    description: "Mesmerizing fluid art exploring the organic flow of pigments, capturing moments of chaos and harmony in vibrant turquoise and magenta compositions.",
    coverImage: fluidArt09,
    images: [fluidArt09],
  },
  {
    id: "fluid-dynamics",
    title: "Fluid Dynamics",
    category: "Fine Art",
    tags: ["FINE ART", "EXPERIMENTAL"],
    year: "2022",
    client: "Art Basel",
    description: "Mesmerizing fluid art exploring the organic flow of pigments, capturing moments of chaos and harmony in vibrant turquoise and magenta compositions.",
    coverImage: fluidArt10,
    images: [fluidArt10],
  },
  {
    id: "fluid-dynamics",
    title: "Fluid Dynamics",
    category: "Fine Art",
    tags: ["FINE ART", "EXPERIMENTAL"],
    year: "2022",
    client: "Art Basel",
    description: "Mesmerizing fluid art exploring the organic flow of pigments, capturing moments of chaos and harmony in vibrant turquoise and magenta compositions.",
    coverImage: fluidArt11,
    images: [fluidArt11]
  },
];
