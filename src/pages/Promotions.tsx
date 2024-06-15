import { FC } from "react";

const Promotions: FC = () => {
    return (
        <div className="container mx-auto min-h-[83vh] w-full max-w-6xl p-4" style={{ marginBottom: '40px', maxWidth: '1200px', margin: 'auto' }}>
            <h1 className="text-4xl font-bold font-lora text-center mb-8">
                Акции
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Первая акция */}
                <div className="flex flex-col items-center mr-4 promo-container">
                    <div style={{ aspectRatio: '4/3' }}>
                        <img src="/promotions_1.jpeg" alt="Торт 1" className="promotion-image object-cover w-full h-full" />
                    </div>
                    <div className="text-container pt-6 mb-10">
                        <div className="text-2xl font-bold font-lora">3 любых торта – бесплатная доставка!</div>
                        <div className="my-4">
                            <p>Закажите 3 абсолютно любых торта (размер, вес и цена – не важны) и мы доставим их до Вашего порога абсолютно бесплатно!</p>
                        </div>
                    </div>
                </div>
                {/* Вторая акция */}
                <div className="flex flex-col items-center mr-4">
                    <div style={{ aspectRatio: '4/3' }}>
                        <img src="/promotions_2.jpeg" alt="Торт 2" className="promotion-image object-cover w-full h-full" />
                    </div>
                    <div className="text-container pt-5 mb-10">
                        <div className="text-2xl font-bold font-lora my-2">Предновогодняя скидка 15%!</div>
                        <div className="my-4">
                            <p>Весь декабрь при заказе торта с сайта, вы получаете гарантированную скидку в 15%!</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Promotions;
