import { FC, useState, useEffect } from "react";
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
  const cartCount = useAppSelector((state) => state.cartReducer.cartItems.length);
  const username = useAppSelector((state) => state.authReducer.username);
  const { requireAuth } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showCart = () => {
    requireAuth(() => dispatch(setCartState(true)));
  };

  return (
    <div className="py-4 bg-white top-0 sticky z-10 shadow-lg font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold" data-test="main-logo">
            <img src="/logo_2.svg" alt="" />
          </Link>

          <div className="lg:hidden">
            <button
              className="text-4xl focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          <div className="hidden lg:flex justify-between w-full max-w-[700px]">
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

          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-md border border-gray-200">
              <div className="p-4">
                <Link
                  to="/about"
                  className="block text-2xl font-bold text-gray-800 mb-2 border-b border-gray-200 py-2"
                  onClick={toggleMobileMenu}
                >
                  О нас
                </Link>
                <Link
                  to="/promotions"
                  className="block text-2xl font-bold text-gray-800 mb-2 border-b border-gray-200 py-2"
                  onClick={toggleMobileMenu}
                >
                  Акции
                </Link>
                <Link
                  to="/delivery"
                  className="block text-2xl font-bold text-gray-800 mb-2 border-b border-gray-200 py-2"
                  onClick={toggleMobileMenu}
                >
                  Доставка
                </Link>
                <Link
                  to="/contacts"
                  className="block text-2xl font-bold text-gray-800 mb-2 border-b border-gray-200 py-2"
                  onClick={toggleMobileMenu}
                >
                  Контакты
                </Link>
                <Link
                  to="/products"
                  className="block text-2xl font-bold text-gray-800 mb-2 py-2"
                  onClick={toggleMobileMenu}
                >
                  Каталог
                </Link>
              </div>
            </div>
          )}

          <div className="flex gap-4 md:gap-8 items-center">
            <div className="hidden lg:block">
              <Link
                to="/products"
                className="text-xl font-bold"
                data-test="main-products"
              >
                Каталог
              </Link>
            </div>
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
