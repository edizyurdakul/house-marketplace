import Header from "../components/Header";
import {
  Hero,
  FeaturedHouses,
  HowItWorks,
  ForRent,
  CallToAction,
  RecentListings,
} from "../components/Sections";

function index() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <FeaturedHouses /> */}
      <HowItWorks />
      <ForRent />
      <CallToAction />
      <RecentListings />
    </div>
  );
}

export default index;
