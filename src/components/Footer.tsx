import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Nehemia. All rights reserved.
          </p>

          {/* Credits */}
          <p className="text-sm text-muted-foreground">
            Designed & Developed by <span className="text-primary font-semibold">Nehemia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
