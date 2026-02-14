import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Code2,
  Wrench,
  FolderKanban,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "About", icon: User, href: "#about" },
  { name: "Skills", icon: Code2, href: "#skills" },
  { name: "Tools", icon: Wrench, href: "#tools" },
  { name: "Projects", icon: FolderKanban, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Left Edge Hover Zone */}
      <div
        className="fixed top-0 left-0 h-full w-8 z-40"
        onMouseEnter={() => setIsOpen(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -120, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onMouseLeave={() => setIsOpen(false)}
            className="
              fixed bottom-8 left-6
              z-50
              flex flex-col gap-3
              p-2
              rounded-2xl
              bg-black/60
              backdrop-blur-lg
              border border-border
              shadow-[0_0_40px_rgba(0,0,0,0.6)]
            "
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    flex items-center gap-4
                    px-5 py-3
                    rounded-xl
                    text-text-muted
                    hover:text-accent
                    hover:bg-bg-surface/60
                    transition-all duration-300
                  "
                >
                  <Icon size={18} />
                  <span className="text-sm tracking-wide">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </motion.nav>

        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
