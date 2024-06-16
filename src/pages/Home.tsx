import { FC, useEffect } from "react";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";
import { useAppDispatch } from "../redux/hooks";
import {
  updateNewList,
  updateFeaturedList,
} from "../redux/features/productSlice";
import { Product } from "../models/Product";
import { HeroSlider } from "@components/Slider.tsx";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("../../products.json");
      const { products } = await response.json();
      const productList: Product[] = products.map((product: Product) => ({
        id: product.id,
        title: product.title,
        images: product.images,
        price: product.price,
        rating: product.rating,
        thumbnail: product.thumbnail,
        description: product.description,
        category: product.category,
        discountPercentage: product.discountPercentage,
      }));
      dispatch(updateFeaturedList(productList.slice(0, 8)));
      dispatch(updateNewList(productList.slice(8, 16)));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <HeroSlider />
      <Features />
      <TrendingProducts />
      <Banner />
      <LatestProducts />
      <br />
    </>
  );
};

export default Home;
