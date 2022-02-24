import Slider from "./Slider";

function FeaturedHouses({ data, id }) {
  return (
    <section className="relative py-8">
      <h2 className="mb-4 text-3xl font-semibold">Houses For Sale</h2>
      <Slider data={data} id={id} />
    </section>
  );
}

export default FeaturedHouses;
