import { FC } from "react";
import { Link } from "react-router-dom";

const NewCollectionBanner: FC = () => {
    return (
        <div className="bg-[#93C5FD] font-lora">
            <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
                <div className="flex items-center">
                    <div className="max-w-[600px] space-y-4">
                        <h2 className="text-black font-bold text-4xl md:text-5xl">
                            Широкий ассортимент
                        </h2>
                        <h3 className="text-2xl">
                            Тортов на все случаи жизни
                        </h3>
                        <Link
                            to="/product/13"
                            data-test="new-collection-btn"
                            className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
                        >
                            Узнать больше
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="../../public/dietos.png" alt="cakes" className="ml-auto" />
                </div>
            </div>
        </div>
    );
};

export default NewCollectionBanner;
