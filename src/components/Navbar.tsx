import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(
    (state) => state.cartReducer.cartItems.length,
  );
  const username = useAppSelector((state) => state.authReducer.username);
  const { requireAuth } = useAuth();

  const showCart = () => {
    requireAuth(() => dispatch(setCartState(true)));
  };

  return (
    <div className="py-4 bg-white top-0 sticky z-10 shadow-lg font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold" data-test="main-logo">
            Cake
          </Link>
          <div className="lg:flex justify-between hidden w-full max-w-[700px]">
            <Link
              to="/about"
              className="text-2xl font-bold text-white bg-blue-300 px-4 rounded"
              data-test="about"
            >
              О нас
            </Link>
            <Link
              to="/promotions"
              className="text-2xl font-bold text-white bg-blue-300 px-4 rounded"
              data-test="promotions"
            >
              Акции
            </Link>
            <Link
              to="/delivery"
              className="text-2xl font-bold text-white bg-blue-300 px-4 rounded"
              data-test="delivery"
            >
              Доставка
            </Link>
            <Link
              to="/contacts"
              className="text-2xl font-bold text-white bg-blue-300 px-4 rounded"
              data-test="contacts"
            >
              Контакты
            </Link>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <Link
              to="/products"
              className="text-xl font-bold"
              data-test="main-products"
            >
              Каталог
            </Link>
            <div className="flex items-center gap-2">
              {username !== "" ? (
                <img
                  src="https://robohash.org/Terry.png?set=set4"
                  alt="avatar"
                  className="w-6"
                />
              ) : (
                <FaUser className="text-gray-500 text-2xl" />
              )}
              <div className="text-gray-500 text-2xl">
                {username !== "" ? (
                  <CustomPopup />
                ) : (
                  <span
                    className="cursor-pointer hover:opacity-85"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    Войти
                  </span>
                )}
              </div>
            </div>
            <div
              className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
              onClick={showCart}
              data-test="cart-btn"
            >
              <AiOutlineShoppingCart />
              <div
                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                data-test="cart-item-count"
              >
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
