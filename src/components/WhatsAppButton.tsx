import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.49l6.33-2.03C9.97 31.076 12.86 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.607c-.39 1.1-1.932 2.013-3.182 2.28-.856.18-1.974.324-5.736-1.233-4.813-1.99-7.912-6.876-8.153-7.196-.23-.32-1.94-2.583-1.94-4.926s1.227-3.494 1.663-3.972c.436-.478.952-.598 1.27-.598.316 0 .63.003.906.016.29.014.68-.11 1.064.812.39.94 1.328 3.242 1.444 3.478.117.236.195.51.04.82-.157.316-.235.512-.47.79-.236.278-.496.62-.708.832-.236.236-.482.49-.207.963.274.472 1.222 2.015 2.624 3.265 1.804 1.608 3.324 2.106 3.796 2.342.472.236.748.197 1.023-.118.274-.316 1.18-1.374 1.495-1.846.316-.472.63-.39 1.063-.236.434.157 2.736 1.29 3.207 1.525.47.236.786.354.902.55.117.197.117 1.14-.274 2.24z" />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5516992772241?text=Olá! Gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] transition-shadow duration-300"
    >
      <WhatsAppIcon />
    </motion.a>
  );
};

export default WhatsAppButton;
