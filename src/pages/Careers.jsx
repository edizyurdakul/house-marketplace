import { motion } from "framer-motion";

function Careers() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      Careers
    </motion.div>
  );
}

export default Careers;
