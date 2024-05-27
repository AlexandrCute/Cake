import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";

const LatestProducts = () => {
  const newProducts = useAppSelector(
    (state) => state.productReducer.newProducts
  );

  return <ProductList title="Новые продукты" products={newProducts} />;
};

export default LatestProducts;
