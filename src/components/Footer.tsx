import { Link } from "react-router-dom";
import { INFO } from "@/data/constants";

interface FooterProps {
  variant?: "default" | "echelon";
}

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "echelon") {
    return (
      <footer className="border-t border-separator mt-auto">
        {/* Main Footer Content */}
        <div className="container-wide py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Location */}
            <div className="space-y-3">
              <p className="text-label">Ubicación</p>
              <div className="text-sm text-foreground space-y-1">
                <p>{INFO.ubicacion}</p>
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-3">
              <p className="text-label">Gallery</p>
              <div className="text-sm space-y-1">
                <Link
                  to="/work"
                  className="block text-foreground hover:text-accent transition-colors"
                >
                  Projectos
                </Link>
                <Link
                  to="/about"
                  className="block text-foreground hover:text-accent transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-foreground hover:text-accent transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <p className="text-label">Contact</p>
              <div className="text-sm text-foreground space-y-1">
                <a
                  href="mailto:omarcaceres@live.com"
                  className="block hover:text-accent transition-colors"
                >
                  {INFO.email}
                </a>
                <p>{INFO.phone}</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="space-y-3">
              <p className="text-label">Legal</p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>© {currentYear} Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Scrolling Text */}
        <div className="border-t border-separator overflow-hidden py-6 md:py-8">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold text-foreground mx-12"
              >
                QA Engineer -
              </span>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  // Default footer
  return (
    <footer className="border-t border-separator">
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left */}
          <div className="space-y-4">
            <p className="font-display text-xl font-semibold">
              Carlos Osmar Caceres
            </p>
            <p className="text-muted-foreground text-sm">
              Design & Illustration
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/work" className="hover-highlight">
              Work
            </Link>
            <Link to="/about" className="hover-highlight">
              About
            </Link>
            <Link to="/contact" className="hover-highlight">
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Carlos Osmar Caceres</p>
            <p className="mt-1">São Paulo, Brazil</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
