import { FC, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { emptyCart, setCartState } from "../redux/features/cartSlice";
import CartRow from "@components/CartRow";
import toast from "react-hot-toast";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.cartReducer.cartOpen);
  const items = useAppSelector((state) => state.cartReducer.cartItems);
  const [checkout, setCheckout] = useState(false);

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      if (item.quantity && item.discountPercentage)
        total +=
          (item.price - (item.price * item.discountPercentage) / 100) *
          item.quantity;
    });
    return total.toFixed(2);
  };

  const handleOrder = () => {
    dispatch(setCartState(false));
    dispatch(emptyCart());
    setCheckout(false);
    toast.success("Ваша заявка успешно оформлена", { duration: 3000 });
  };

  if (isOpen) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
        {checkout ? (
          <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla">
            <h1 className="font-bold mb-10">Вы уверены, что хотите оформить заявку? Если Да, то нажмите кнопку <span className="">Подтвердить</span>. <br /> С вами свяжутся по телефону в ближайшее время и уточнят подробности</h1>

            <div className="flex items-center space-x-2">
              <span
                className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1 text-white bg-blue-500 hover:bg-blue-700"
                onClick={() => setCheckout(false)}
              >
                Отмена
              </span>
              <span
                className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1 text-white bg-blue-500 hover:bg-blue-700"
                onClick={handleOrder}
                data-test="confirm-order-btn"
              >
                Подтвердить
              </span>
            </div>
          </div>
        ) : (
          <div
            className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla"
            data-test="cart-container"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-2xl">Ваша корзина</h3>
              <RxCross1
                className="text-[24px] cursor-pointer hover:opacity-70"
                onClick={() => dispatch(setCartState(false))}
                data-test="cart-close"
              />
            </div>
            <div className="mt-6 space-y-2">
              {items?.length > 0 ? (
                items.map((item) => <CartRow key={item.id} {...item} />)
              ) : (
                <div className="flex flex-col justify-center items-center p-4">
                  <img src="/emptyCart.jpg" alt="empty" className="w-40" />
                  <p className="text-center text-xl my-2">Ваша корзина пустая</p>
                </div>
              )}
            </div>
            {items?.length > 0 && (
              <>
                <div className="flex items-center justify-between p-2">
                  <h2 className="font-bold text-2xl">Итого</h2>
                  <h2 className="font-bold text-2xl">{calculateTotal()} BYN</h2>
                </div>
                <button
                  type="button"
                  data-test="checkout-btn"
                  onClick={() => setCheckout(true)}
                  className="w-full text-center text-white bg-blue-500 py-2 my-4 rounded font-bold text-xl hover:bg-blue-700"
                >
                  Оформить заявку
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
};

export default Cart;
