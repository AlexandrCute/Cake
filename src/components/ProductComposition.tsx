import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Product } from "@models/Product.ts";

export const ProductComposition = ({ product }: { product?: Product }) => {
  const [isCompositionOpen, setCompositionOpen] = useState(false);
  const [isNutritionalValueOpen, setNutritionalValueOpen] = useState(false);
  const tabStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    borderTop: "1px solid rgba(97, 52, 62, .12)",
    padding: "10px",
    fontWeight: "bold",
    transition: "background-color 1s ease",
  };

  const contentStyle = {
    overflow: "hidden",
    transition: "max-height 1s ease, padding 1s ease",
  };

  const contentInnerStyle = (isOpen: boolean) => ({
    maxHeight: isOpen ? "200px" : "0",
    padding: isOpen ? "10px" : "0 10px",
  });

  if (!product) {
    return null;
  }

  return (
    <div>
      <div>
        <div
          onClick={() => setCompositionOpen(!isCompositionOpen)}
          style={tabStyle}
        >
          <span style={{ fontSize: "24px" }}>Состав</span>
          {isCompositionOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div
          style={{ ...contentStyle, ...contentInnerStyle(isCompositionOpen) }}
        >
          <div
            style={{
              opacity: isCompositionOpen ? "1" : "0",
              transition: "opacity 1s ease",
              paddingBottom: "20px",
            }}
          >
            {product.compound}
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => setNutritionalValueOpen(!isNutritionalValueOpen)}
          style={tabStyle}
        >
          <span style={{ fontSize: "24px" }}>
            Пищевая ценность на 100г продукта
          </span>
          {isNutritionalValueOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <div
          style={{
            ...contentStyle,
            ...contentInnerStyle(isNutritionalValueOpen),
          }}
        >
          <div
            style={{
              opacity: isNutritionalValueOpen ? "1" : "0",
              transition: "opacity 1s ease",
            }}
          >
            <div
              className="flex flex-wrap gap-4 md:gap-16"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-lg md:text-xl">Калории</span>
                <span>{product.calories} Ккал.</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-lg md:text-xl">Белки</span>
                <span>{product.squirrels} гр.</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-lg md:text-xl">Жиры</span>
                <span>{product.fats} гр.</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-lg md:text-xl">Углеводы</span>
                <span>{product.carbohydrates} гр.</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-lg md:text-xl">Вес</span>
                <span>{product.weight} кг</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-lg md:text-xl">
                  Срок годности
                </span>
                <span>{product.bestBeforeDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
