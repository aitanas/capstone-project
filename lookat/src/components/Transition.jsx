import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Transition({ children }) {
  const { asPath } = useRouter();

  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.25,
      },
    },
  };

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
