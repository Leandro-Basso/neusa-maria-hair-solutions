import { motion } from "framer-motion";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Salão Neusa Maria Próteses Capilares"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient-gold font-display text-xl md:text-2xl font-semibold tracking-wider">
            NEUSA MARIA
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase text-foreground/70"
        >
          <a href="#servicos" className="hover:text-primary transition-colors duration-300">Serviços</a>
          <a href="#sobre" className="hover:text-primary transition-colors duration-300">Sobre</a>
          <a href="#depoimentos" className="hover:text-primary transition-colors duration-300">Depoimentos</a>
          <a href="#contato" className="hover:text-primary transition-colors duration-300">Contato</a>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-body text-sm md:text-base tracking-[0.4em] uppercase text-primary mb-6">
            Próteses Capilares
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient-gold">Neusa Maria</span>
          <span className="block text-xl md:text-2xl lg:text-3xl font-body font-light text-muted-foreground mt-4 tracking-wide">
            Próteses Capilares em Ribeirão Preto
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformamos vidas através de próteses capilares de alta qualidade.
          Recupere sua autoestima com naturalidade e confiança.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 tracking-wider uppercase text-sm rounded-sm hover:opacity-90 transition-opacity duration-300"
          >
            Agende sua Consulta
          </a>
          <a
            href="#servicos"
            className="border border-gold text-primary font-body font-medium px-8 py-4 tracking-wider uppercase text-sm rounded-sm hover:bg-primary/10 transition-colors duration-300"
          >
            Nossos Serviços
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
