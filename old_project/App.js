import Header from "../components/Header";
import {
  Hero,
  FeaturedHouses,
  HowItWorks,
  ForRent,
  CallToAction,
  RecentListings,
} from "../components/Sections";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedHouses />
      <HowItWorks />
      <ForRent />
      <CallToAction />
      <RecentListings />
    </div>
  );
}

export default App;
