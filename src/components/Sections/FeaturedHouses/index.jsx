import Slider from "./Slider";
import Card from "./Card";

const featuredHouses = [
  {
    title: "Costa Blanca",
    price: "$1.900",
    description:
      "One of the hottest destinations in Costa Blanca, luxury homes situated in Campoamor, located near to the coast, golf course, and shopping center.",
    wifi: true,
    parking: true,
    furnished: true,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Mediterranean ",
    price: "$2.300",
    description:
      "One of the hottest destinations in Costa Blanca, luxury homes situated in Campoamor, located near to the coast, golf course, and shopping center.",
    wifi: true,
    parking: false,
    furnished: true,
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Parkdale House",
    price: "$4.100",
    description:
      "Parkdale house is a celebration of large existing gum trees on site. The tall, sturdy trees, the smooth and rustic texture of their bark- forms inspiration for the design of this house.",
    wifi: true,
    parking: true,
    furnished: true,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Costa Blanca",
    price: "$1.900",
    description:
      "One of the hottest destinations in Costa Blanca, luxury homes situated in Campoamor, located near to the coast, golf course, and shopping center.",
    wifi: true,
    parking: true,
    furnished: true,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Mediterranean ",
    price: "$2.300",
    description:
      "One of the hottest destinations in Costa Blanca, luxury homes situated in Campoamor, located near to the coast, golf course, and shopping center.",
    wifi: true,
    parking: false,
    furnished: true,
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Parkdale House",
    price: "$4.100",
    description:
      "Parkdale house is a celebration of large existing gum trees on site. The tall, sturdy trees, the smooth and rustic texture of their bark- forms inspiration for the design of this house.",
    wifi: true,
    parking: true,
    furnished: true,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

function FeaturedHouses() {
  return (
    <section className="relative py-8">
      <h2 className="mb-4 text-3xl font-semibold">Featured Houses</h2>
      <Slider data={featuredHouses} />
    </section>
  );
}

export default FeaturedHouses;
