import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import toast from "react-hot-toast";

import { Product } from "../models/Product";
import { useAppDispatch } from "../redux/hooks";
import useAuth from "../hooks/useAuth";
import { addToCart, setCartState } from "../redux/features/cartSlice";
import { addToWishlist } from "../redux/features/productSlice";
import RatingStar from "../components/RatingStar";
import PriceSection from "../components/PriceSection";
import ProductList from "../components/ProductList";
import Reviews from "../components/Reviews";
import ReviewForm from "@components/ReviewForm.tsx";
import { ProductComposition } from "@components/ProductComposition.tsx";

const SingleProduct = () => {
  const dispatch = useAppDispatch();
  const { productID } = useParams();
  const [product, setProduct] = useState<Product>();
  const [selectedImg, setSelectedImg] = useState<string>();
  const [sCategory, setScategory] = useState<string>();
  const [similar, setSimilar] = useState<Product[]>([]);
  const { requireAuth } = useAuth();

  useEffect(() => {
    if (!productID) return;
    const fetchProductDetails = () => {
      fetch(`../../products.json`)
        .then((res) => res.json())
        .then((data) => {
          const products: Product[] = data.products;
          const id = parseInt(productID);
          const product = products.find((product) => product.id === id);
          if (productID) {
            setProduct(product);
            setScategory(product?.category);
            setSelectedImg(product?.thumbnail);
          }

          const filteredProducts = products.filter(
            (product) => product.category === sCategory,
          );
          setSimilar(filteredProducts);
        });
    };
    fetchProductDetails();
  }, [productID]);

  useEffect(() => {
    if (!productID || !sCategory) return;
    const fetchPreferences = () => {
      fetch(`../../products.json`)
        .then((res) => res.json())
        .then((data) => {
          const products: Product[] = data.products;
          const id = parseInt(productID);
          const product = products.find((product) => product.id === id);
          if (productID) {
            setProduct(product);
            setScategory(product?.category);
            setSelectedImg(product?.thumbnail);
          }

          const filteredProducts = products.filter(
            (product) => product.category === sCategory,
          );
          setSimilar(filteredProducts);
        });
    };
    if (sCategory && sCategory !== "") fetchPreferences();
  }, [productID, sCategory]);

  const addCart = () => {
    requireAuth(() => {
      if (product)
        dispatch(
          addToCart({
            id: product.id,
            price: product.price,
            title: product.title,
            category: product.category,
            rating: product.rating,
            thumbnail: product.thumbnail,
            discountPercentage: product.discountPercentage,
            description: product.description,
            carbohydrates: product.carbohydrates,
            compound: product.compound,
            fats: product.fats,
            weight: product.weight,
            bestBeforeDate: product.bestBeforeDate,
            calories: product.calories,
            squirrels: product.squirrels,
          }),
        );
      toast.success("Товар добавлен в корзину", {
        duration: 3000,
      });
    });
  };

  const buyNow = () => {
    requireAuth(() => {
      if (product)
        dispatch(
          addToCart({
            id: product.id,
            price: product.price,
            title: product.title,
            category: product.category,
            rating: product.rating,
            thumbnail: product.thumbnail,
            discountPercentage: product.discountPercentage,
            description: product.description,
            carbohydrates: product.carbohydrates,
            compound: product.compound,
            fats: product.fats,
            weight: product.weight,
            bestBeforeDate: product.bestBeforeDate,
            calories: product.calories,
            squirrels: product.squirrels,
          }),
        );
      dispatch(setCartState(true));
    });
  };

  const addWishlist = () => {
    requireAuth(() => {
      if (product) {
        dispatch(addToWishlist(product));
        toast.success("Товар добавлен в избранное", {
          duration: 3000,
        });
      }
    });
  };

  return (
    <div className="container mx-auto pt-8 px-4">
      <div className="grid grid-cols-1 1fr md:grid-cols-2 3fr gap-8 pb-8 font-karla">
        <div className="space-y-2 flex flex-col items-center">
          <img
            src={`.${selectedImg}`}           //`.${selectedImg}`
            alt="selected"
            className="max-w-full object-contain"
            style={{ height: "24rem" }}
          />
        </div>
        <div className="flex flex-col px-2">
          <h2 className="text-2xl">{product?.title}</h2>
          {product?.rating && <RatingStar rating={product?.rating} />}
          <div className="mt-1">
            {product?.discountPercentage && (
              <PriceSection
                discountPercentage={product?.discountPercentage}
                price={product?.price}
              />
            )}
          </div>
          <div className="mt-2">
            <h2 className="font-bold">Категория</h2>
            <p className="leading-5">{product?.category}</p>
          </div>
          <div className="mt-2">
            <h2 className="font-bold">Описание</h2>
            <p className="leading-5">{product?.description}</p>
          </div>
          <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
            <button
              type="button"
              className="flex items-center space-x-1 mb-2 hover:bg-pink-700 text-white p-2 rounded bg-pink-500"
              onClick={addCart}
            >
              <AiOutlineShoppingCart />
              <span>Добавить в корзину</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-1 mb-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              onClick={buyNow}
            >
              <FaHandHoldingDollar />
              <span>Купить</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-1 mb-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
              onClick={addWishlist}
            >
              <MdFavoriteBorder />
              <span>Добавить в избранное</span>
            </button>
          </div>
          <div className="container flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 mt-4">
            <div className="feature flex items-center gap-3 text-lg md:w-1/3 lg:w-auto">
              <img
                src="/control_quality.svg"
                alt="Контроль качества"
                className="icon"
              />
              <span>Контроль качества</span>
            </div>
            <div className="feature flex items-center gap-3 text-lg mt-4 md:mt-0 md:w-1/3 lg:w-auto">
              <img
                src="/handmade.svg"
                alt="Ручная работа"
                className="icon"
              />
              <span>Ручная работа</span>
            </div>
            <div className="feature flex items-center gap-3 text-lg mt-4 md:mt-0 md:w-1/3 lg:w-auto">
              <img
                src="/natutal_products.svg"
                alt="Натуральные продукты"
                className="icon"
              />
              <span>Натуральные продукты</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductComposition product={product} />
      </div>
      <div className="mt-8">
        <Reviews />
        <ReviewForm />
      </div>
      <hr className="mt-4" />
      <ProductList title="Похожие продукты" products={similar} />
      <br />
    </div>
  );
};

export default SingleProduct;
