import { ProductList } from "../components/ProductList";
import { getProducts } from "../fakeAPI";

const Galerie = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default Galerie;
