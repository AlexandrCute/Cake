import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <div className="bg-blue-500 text-white p-4 flex flex-col items-center">
    <div className="flex flex-col md:flex-row md:justify-between w-full p-8">
      <div className="flex flex-col space-y-2 order-1 md:order-1">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img src="/phone.svg" alt="телефон" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <div>г. Гомель</div>
            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              <a href="tel:+375 44 453-21-43">+375 44 453-21-43</a>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img src="/label.svg" alt="адрес" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <div>г. Гомель, ул. Крестьянская, дом 22</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 order-2 md:order-2 md:text-center">
        <div className="text-center mt-2">Мы в социальных сетях:</div>
        <div className="flex justify-center">
          <a href="https://www.instagram.com/nyc.cake/">
            <img
              src="/instagram.svg"
              style={{ width: "30px", height: "30px", margin: "0 10px" }}
              alt="instagram"
            />
          </a>
          <a href="https://vk.com/id174816883">
            <img
              src="/vk.svg"
              style={{ width: "30px", height: "30px", margin: "0 10px" }}
              alt="vk"
            />
          </a>
          <a href="https://x.com/Wanderi13765185">
            <img
              src="/x-twitter.svg"
              style={{ width: "30px", height: "30px", margin: "0 10px" }}
              alt="twitter"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100094357052966&_rdc=1&_rdr">
            <img
              src="/facebook.svg"
              style={{ width: "30px", height: "30px", margin: "0 10px" }}
              alt="facebook"
            />
          </a>
        </div>
      </div>
      {/* 3-ий блок */}
      <div className="flex flex-col space-y-2 order-3 md:order-3 md:mt-3 md:text-center">
        <div className="flex mt-3 space-x-3 justify-center">
          <a href="#">
            <img
              src="/m-card_1.svg"
              style={{ width: "35px", height: "35px", margin: "0 5px" }}
              alt="mastercard"
            />
          </a>
          <a href="#">
            <img
              src="/mir_1.svg"
              style={{ width: "48px", height: "48px", margin: "0 5px" }}
              alt="мир"
            />
          </a>
          <a href="#">
            <img
              src="/paypal_1.svg"
              style={{ width: "48px", height: "48px", margin: "0 5px" }}
              alt="PayPal"
            />
          </a>
          <a href="#">
            <img
              src="/visa.svg"
              style={{ width: "48px", height: "48px", margin: "0 5px" }}
              alt="visa"
            />
          </a>
          <a href="#">
            <img
              src="/yandex_1.svg"
              style={{ width: "30px", height: "30px", margin: "0 5px" }}
              alt="yandex money"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="w-full h-px bg-white my-5"></div>
    <div className="flex flex-col justify-between items-center">
      <div>&copy; Copyright | All Rights Reserved</div>
      <div>
        <div>
          <Link
            to="#"
            className="hover:underline hover:font-bold opacity-85 hover:opacity-100"
          >
            Alexandr Dabrydnev
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
