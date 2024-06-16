import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FC } from "react";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Бесплатная доставка",
    desc: "На заказы от 50 BYN",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Возвраты некачественной продукции",
    desc: "Возврат денег гарантирован",
  },
  {
    icon: <TbDiscount className="text-4xl" />,
    title: "Постоянные клиенты",
    desc: "Скидки и бонусы для постоянных клиентов",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "Заказы 24/7",
    desc: "Оформить заказ можно в любое время",
  },
];

const Features: FC = () => (
  <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
    {data.map((item) => (
      <FeatureCard
        key={item.title}
        icon={item.icon}
        title={item.title}
        desc={item.desc}
      />
    ))}
  </div>
);

export default Features;
