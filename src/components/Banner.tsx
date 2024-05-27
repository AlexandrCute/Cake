import { FC } from "react";
import { Link } from "react-router-dom";

const Banner: FC = () => (
  <div className="container mt-8 mx-auto px-4 md:flex font-lora">
    <img src="/konditerskaya.jpeg" alt="konditerskaya" className="md:w-1/2" />
    <div className="bg-[#e3edf6] md:w-1/2 flex flex-col items-center text-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-1">Не пропусти скидки</h1>
      <h2 className="text-2xl font-semibold mb-4">Для новых клиентов -10% только на этой неделе</h2>
      <Link
        to="/product/4"
        className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
        data-test="banner-btn"
      >
        Заказать сейчас
      </Link>
    </div>
  </div>
);

export default Banner;
