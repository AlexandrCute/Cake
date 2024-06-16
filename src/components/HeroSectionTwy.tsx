import { FC } from "react";
import { Link } from "react-router-dom";

const NewCollectionBanner: FC = () => {
    return (
        <div className="bg-[#f7f0e4] font-lora">
            <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
                <div className="flex items-center">
                    <div className="max-w-[600px] space-y-4">
                        <h2 className="text-black font-bold text-4xl md:text-5xl">
                            Новая коллекция тортов
                        </h2>
                        <h3 className="text-2xl">
                            Откройте для себя уникальные вкусы и дизайны
                        </h3>
                        <Link
                            to="/product/9"
                            data-test="new-collection-btn"
                            className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
                        >
                            Узнать больше
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/lime_cakes.png" alt="cakes" className="ml-auto" />
                </div>
            </div>
        </div>
    );
};

export default NewCollectionBanner;
