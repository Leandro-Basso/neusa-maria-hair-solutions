import { motion } from "framer-motion";
import service1 from "@/assets/service-1.webp";
import service2 from "@/assets/service-2.webp";
import service3 from "@/assets/service-3.webp";

const services = [
  {
    image: service1,
    title: "Prótese Capilar Feminina",
    description:
      "Soluções personalizadas para mulheres que buscam volume, comprimento e naturalidade. Cada peça é feita sob medida.",
  },
  {
    image: service2,
    title: "Aplicação e Manutenção",
    description:
      "Aplicação profissional com técnicas avançadas que garantem conforto, segurança e um resultado imperceptível.",
  },
  {
    image: service3,
    title: "Prótese Capilar Masculina",
    description:
      "Devolvemos a confiança com próteses masculinas de visual natural, adaptadas ao seu estilo e rotina.",
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
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-[3/4]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500" />
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
