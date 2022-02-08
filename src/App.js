import Header from "./components/Header";
import {
  Hero,
  FeaturedHouses,
  HowItWorks,
  ForRent,
  CallToAction,
} from "./components/Sections";

function App() {
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

export default App;
