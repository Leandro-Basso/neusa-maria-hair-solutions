import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Fale Conosco
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            Agende sua Consulta
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Entre em contato e agende uma avaliação gratuita. Estamos prontas para
            ajudar você a recuperar sua autoestima.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Phone,
              title: "Telefone",
              info: "(16) 3911-5085",
              link: "tel:+551639115085",
            },
            {
              icon: Instagram,
              title: "Instagram",
              info: "@neusamariaprotesecapilar",
              link: "https://www.instagram.com/neusamariaprotesecapilar/",
            },
            {
              icon: MapPin,
              title: "Endereço",
              info: "R. Garibaldi, 1804 - Boulevard, Ribeirão Preto - SP",
              link: "https://www.google.com/maps/search/?api=1&query=R.+Garibaldi+1804+Boulevard+Ribeir%C3%A3o+Preto+SP",
            },
            {
              icon: Clock,
              title: "Horário",
              info: "Seg-Sáb: 9h às 18h",
              link: "#",
            },
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-gold rounded-sm p-8 text-center hover:shadow-gold transition-shadow duration-500 group"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm">{item.info}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/5516992772241?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold px-10 py-4 tracking-wider uppercase text-sm rounded-sm hover:opacity-90 transition-opacity duration-300"
          >
            Agendar via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
