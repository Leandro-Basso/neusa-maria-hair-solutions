const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-gold">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="font-display text-2xl font-semibold text-gradient-gold">
          NEUSA MARIA
        </span>
        <p className="font-body text-sm text-muted-foreground mt-3">
          Próteses Capilares — Transformando vidas com confiança e naturalidade
        </p>
        <p className="font-body text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} Neusa Maria Próteses Capilares. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
