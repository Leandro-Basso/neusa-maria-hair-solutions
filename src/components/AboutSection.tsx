import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import fotoApresentacao from "@/assets/neusa-maria-especialista-aplicacao-protese-capilar-ribeirao-preto.webp";

const stats = [
  { target: 25, prefix: "+", suffix: "", label: "Anos de experiência" },
  { target: 3000, prefix: "+", suffix: "", label: "Clientes satisfeitos" },
  { target: 100, prefix: "", suffix: "%", label: "Satisfação garantida" },
];

const AnimatedNumber = ({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold text-primary">
      {prefix}{count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
              Nossa História
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-8">
              Sobre Neusa Maria
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-lg">
              Há mais de 25 anos, Neusa Maria dedica sua vida a transformar a autoestima de pessoas
              através de próteses capilares de altíssima qualidade. Cada peça é cuidadosamente
              selecionada e aplicada com técnicas exclusivas.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Nosso compromisso é oferecer um resultado natural e confortável,
              devolvendo a confiança e a alegria dos nossos clientes. Trabalhamos com os
              melhores materiais do mercado e técnicas constantemente atualizadas.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="text-center lg:text-left"
                >
                  <AnimatedNumber target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Foto da profissional */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-sm overflow-hidden">
              <img
                src={fotoApresentacao}
                alt="Neusa Maria - Especialista em Próteses Capilares"
                className="w-full h-full object-cover"
                width={800}
                height={800}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
