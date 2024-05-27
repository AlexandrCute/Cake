import { FC, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../components/HeroSection";
import HeroSectionTwy from "@components/HeroSectionTwy";
import HeroSectionThree from "@components/HeroSectionThree";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";
import { useAppDispatch } from "../redux/hooks";
import { updateNewList, updateFeaturedList } from "../redux/features/productSlice";
import { Product } from "../models/Product";

const HeroSlider: FC = () => {
  const settings = {
    dots: true, // Показывает точки-индикаторы слайдов на слайдере.
    infinite: true, // Зацикливает слайдер, так что после последнего слайда снова показывается первый.
    speed: 500, // Скорость анимации смены слайдов в миллисекундах.
    slidesToShow: 1, // Количество слайдов, отображаемых за один раз.
    slidesToScroll: 1, // Количество слайдов, прокручиваемых за одно нажатие.
    autoplay: true, // Включает автоматическую прокрутку слайдов.
    autoplaySpeed: 5000, // Интервал времени (в миллисекундах) между автоматической сменой слайдов.
  };

  return (
    <Slider {...settings}>
      <div>
        <HeroSection />
      </div>
      <div>
        <HeroSectionTwy />
      </div>
      <div>
        <HeroSectionThree />
      </div>
    </Slider>
  );
};

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
