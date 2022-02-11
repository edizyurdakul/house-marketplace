import {
  Hero,
  FeaturedHouses,
  HowItWorks,
  ForRent,
  CallToAction,
} from "../components/Sections";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Hero />
      <FeaturedHouses />
      <HowItWorks />
      <ForRent />
      <CallToAction />
    </motion.div>
  );
}

export default Home;
