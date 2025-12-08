import ProductCard from "../Components/Productcard";
import { products } from "../data/brand/product";

export default function Shop() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          brand={item.brand}
          size={item.size}
          price={item.price}
          images={item.images}
        />
      ))}
    </div>
  );
}
