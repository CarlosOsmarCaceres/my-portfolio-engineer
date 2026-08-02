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

export interface Photo {
  id: string;

  coverImage: string;
  images: string[];
}

export const photo: Photo[] = [
  {
    id: "neon-glow",
    coverImage: fluidArt01,
    images: [fluidArt02],
  },
  {
    id: "light-forms",
    coverImage: fluidArt02,
    images: [fluidArt02],
  },
  {
    id: "mystic-arcana",
    coverImage: fluidArt03,
    images: [fluidArt03],
  },
  {
    id: "prismatic-dreams",
   
    coverImage: fluidArt04,
    images: [fluidArt04],
  },
  {
    id: "digital-currents",

    coverImage: fluidArt05,
    images: [fluidArt05],
  },
  {
    id: "chromatic-burst",

    coverImage:   fluidArt06,
    images: [fluidArt06],
  },
  {
    id: "layered-depths",

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

    coverImage: fluidArt09,
    images: [fluidArt09],
  },
  {
    id: "fluid-dynamics",

    coverImage: fluidArt10,
    images: [fluidArt10],
  },
  {
    id: "fluid-dynamics",

    coverImage: fluidArt11,
    images: [fluidArt11]
  },
];
