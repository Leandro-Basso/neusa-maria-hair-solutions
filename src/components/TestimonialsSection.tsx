import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carla Santos",
    text: "A Neusa Maria mudou minha vida! Após a quimioterapia, eu estava devastada, mas ela me devolveu a confiança. O resultado ficou tão natural que ninguém percebe.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    text: "Profissionalismo e dedicação são marcas da Neusa Maria. Minha prótese capilar ficou perfeita, confortável e com aparência totalmente natural.",
    rating: 5,
  },
  {
    name: "Juliana Ferreira",
    text: "Eu chorei de alegria quando me vi no espelho. A Neusa tem um dom para entender o que cada pessoa precisa. Recomendo de olhos fechados!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            O que dizem nossos clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card border border-gold rounded-sm p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="font-body text-sm font-semibold text-primary tracking-wider uppercase">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
