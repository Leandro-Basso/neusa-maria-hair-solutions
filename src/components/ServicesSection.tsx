import { motion } from "framer-motion";
import service2 from "@/assets/service-2.webp";
import service3 from "@/assets/service-3.webp";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import antesF from "@/assets/before-after/protese-capilar-feminina-antes.webp";
import depoisF from "@/assets/before-after/protese-capilar-feminina-depois.webp";
import antesM from "@/assets/before-after/protese-capilar-masculina-antes.webp";
import depoisM from "@/assets/before-after/protese-capilar-masculina-depois.webp";
import manutencao from "@/assets/before-after/manutencao-protese-capilar.webp";

const services = [
  {
    slider: true,
    before: antesM,
    after: depoisM,
    title: "Prótese Capilar Masculina",
    description:
      "Devolvemos a confiança com próteses masculinas de visual natural, adaptadas ao seu estilo e rotina.",
  },
  {
    slider: true,
    mirror: true,
    before: antesF,
    after: depoisF,
    title: "Prótese Capilar Feminina",
    description:
      "Soluções personalizadas para mulheres que buscam volume, comprimento e naturalidade. Cada peça é feita sob medida.",
  },
  {
    slider: false,
    image: manutencao,
    title: "Manutenção",
    description:
      "Mantenha sua prótese sempre com aspecto natural e durável. Realizamos limpeza profunda, hidratação dos fios e reposicionamento para garantir conforto, fixação segura e muito mais tempo de vida útil à sua peça.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            O que fazemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            Nossos Serviços
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="mb-6">
                {service.slider ? (
                  <BeforeAfterSlider
                    beforeSrc={service.before!}
                    afterSrc={service.after!}
                    alt={service.title}
                    mirror={service.mirror}
                  />
                ) : (
                  <div className="relative overflow-hidden rounded-sm aspect-[9/5]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500" />
                  </div>
                )}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
