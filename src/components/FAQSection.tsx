import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A prótese capilar fica visível ou parece artificial?",
    answer:
      "Não. As próteses que utilizamos são feitas com cabelos naturais e bases ultrafinas que simulam o couro cabeludo. O resultado é completamente imperceptível, mesmo de perto.",
  },
  {
    question: "Quanto tempo dura uma prótese capilar?",
    answer:
      "Com manutenção adequada, uma prótese capilar dura em média de 1 a 2 anos. A durabilidade depende dos cuidados diários e da frequência de manutenção.",
  },
  {
    question: "Posso molhar, nadar e praticar exercícios com a prótese?",
    answer:
      "Sim! A prótese é fixada de forma segura e permite todas as atividades do dia a dia, incluindo banho, piscina, mar e academia. Ela faz parte da sua rotina normalmente.",
  },
  {
    question: "Como é feita a fixação da prótese?",
    answer:
      "A fixação é feita com adesivos ou fitas específicas de alta tecnologia, seguras e confortáveis para a pele. A aplicação é realizada por profissional especializada garantindo conforto e segurança.",
  },
  {
    question: "Com que frequência preciso fazer a manutenção?",
    answer:
      "Recomendamos manutenção a cada 30 a 45 dias. Na manutenção realizamos limpeza profunda, hidratação dos fios, reposicionamento e renovação da fixação.",
  },
  {
    question: "Atende casos de alopecia, quimioterapia e outros tratamentos?",
    answer:
      "Sim. Atendemos com muito carinho pessoas que passam por alopecia, quimioterapia, tricotilomania e outros tratamentos. Cada caso é tratado de forma personalizada e sigilosa.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-24 md:pt-32 pb-0 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Dúvidas Frequentes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            Perguntas & Respostas
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-gold rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-card hover:bg-card/80 transition-colors duration-300"
              >
                <span className="font-body font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-body text-muted-foreground leading-relaxed px-6 py-5 border-t border-gold/30">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
