import Header from "./components/Header";
import {
  Hero,
  FeaturedHouses,
  HowItWorks,
  ForRent,
  CallToAction,
} from "../components/Sections";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedHouses />
      <HowItWorks />
      <ForRent />
      <CallToAction />
    </div>
  );
}

export default Home;
