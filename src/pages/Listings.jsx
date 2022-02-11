import { motion } from "framer-motion";

function Listings() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      Listings
    </motion.div>
  );
}

export default Listings;
