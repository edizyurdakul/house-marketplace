import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      About
    </motion.div>
  );
}

export default About;
