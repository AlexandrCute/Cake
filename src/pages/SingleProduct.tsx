import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { addToCart, setCartState } from "../redux/features/cartSlice";
import { Product } from "../models/Product";
import RatingStar from "../components/RatingStar";
import PriceSection from "../components/PriceSection";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import ProductList from "../components/ProductList";
import Reviews from "../components/Reviews";
import useAuth from "../hooks/useAuth";
import { MdFavoriteBorder } from "react-icons/md";
import { addToWishlist } from "../redux/features/productSlice";
import ReviewForm from "@components/ReviewForm.tsx";

const SingleProduct: FC = () => {
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
    <div className="container mx-auto pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 font-karla">
        <div className="space-y-2">
          <img src={`.${selectedImg}`} alt="selected" className="h-80" />
        </div>
        <div className="px-2">
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
              className="flex items-center space-x-1 mb-2 hover:bg-pink-700 text-white p-2 ml-2 rounded bg-pink-500"
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
        </div>
        <Reviews />
      </div>
      <ReviewForm />
      <hr className="mt-4" />
      <ProductList title="Подобные продукты" products={similar} />
      <br />
    </div>
  );
};

export default SingleProduct;
