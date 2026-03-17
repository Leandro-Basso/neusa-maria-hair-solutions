import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import heroImageWebp from "@/assets/salao-neusa-maria-protese-capilar-ribeirao-preto.webp";
import heroImageAvif from "@/assets/salao-neusa-maria-protese-capilar-ribeirao-preto.avif";
import logo from "@/assets/logo/logo-neusa-maria-protese-capilar.webp";
import fotoNeusa from "@/assets/neusa-maria-em-pe-protese-capilar.webp";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet={heroImageAvif} type="image/avif" />
          <source srcSet={heroImageWebp} type="image/webp" />
          <img
            src={heroImageWebp}
            alt="Salão Neusa Maria Próteses Capilares"
            className="w-full h-full object-cover"
            loading="eager"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <div />

        {/* Desktop nav */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase text-foreground/70"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Mobile hamburger button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground/70 hover:text-primary transition-colors duration-300"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </motion.button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-foreground/70 hover:text-primary transition-colors duration-300"
              aria-label="Fechar menu"
            >
              <X className="w-7 h-7" />
            </button>

            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="font-body text-2xl tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/5516992772241?text=Olá! Gostaria de agendar uma avaliação ou obter mais informações sobre próteses capilares."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 tracking-wider uppercase text-sm rounded-sm"
            >
              Agendar via WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-6 pb-0">

        {/* Coluna esquerda: logo + texto + botões */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center md:items-start text-center md:text-left flex-1"
        >
          <p className="font-body text-sm md:text-base tracking-[0.4em] uppercase text-primary">
            Próteses Capilares
          </p>
          <img
            src={logo}
            alt="Neusa Maria Próteses Capilares"
            className="h-[18rem] md:h-[33rem] lg:h-[39rem] w-auto"
            style={{ mixBlendMode: "multiply", marginTop: "-1.5rem", marginBottom: "-4rem" }}
          />
          {/* Foto da Neusa — apenas mobile, abaixo da logo */}
          <div className="block md:hidden w-72 mt-4 relative">
            <img
              src={fotoNeusa}
              alt="Neusa Maria - Especialista em Próteses Capilares"
              className="w-full h-auto object-cover rounded-sm"
              style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)" }}
            />
            {/* Textos sobrepostos no rodapé da foto */}
            <div className="absolute bottom-6 left-0 right-0 text-center px-2">
              <span className="block text-sm font-body font-light text-white/70 tracking-wide">
                Especialista em Próteses Capilares
              </span>
              <span className="block text-sm font-body font-light text-white/70 tracking-wide">
                Ribeirão Preto
              </span>
            </div>
          </div>

          {/* Texto desktop apenas */}
          <span className="hidden md:block text-lg md:text-xl lg:text-2xl font-body font-light text-muted-foreground tracking-wide">
            Próteses Capilares em Ribeirão Preto
          </span>

          {/* Texto descritivo — mobile abaixo da foto, desktop normal */}
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-md mt-4 mb-8 leading-relaxed">
            Transformamos vidas através de próteses capilares de alta qualidade.
            Recupere sua autoestima com naturalidade e confiança.
          </p>

          <div className="flex flex-col items-center md:items-start gap-4 w-full">
            <a
              href="#contato"
              className="w-full text-center bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 tracking-wider uppercase text-sm rounded-sm hover:opacity-90 transition-opacity duration-300"
            >
              Agende sua Avaliação
            </a>
            <a
              href="#servicos"
              className="w-full text-center border border-gold text-primary font-body font-medium px-8 py-4 tracking-wider uppercase text-sm rounded-sm hover:bg-primary/10 transition-colors duration-300"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>

        {/* Coluna direita: foto da Neusa — apenas desktop */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block flex-shrink-0 md:w-[36rem] lg:w-[42rem]"
        >
          <div className="relative">
            <img
              src={fotoNeusa}
              alt="Neusa Maria - Especialista em Próteses Capilares"
              className="w-full h-auto object-cover rounded-sm"
              style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)" }}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
