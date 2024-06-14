import { FC } from "react";

const Promotions: FC = () => {
    return (
        <div className="container mx-auto min-h-[83vh] w-full max-w-6xl flex flex-col justify-center items-center" style={{ marginBottom: '40px' }}>
            <h1 className="text-4xl p-4 font-bold font-lora text-center mb-8">
                Акции
            </h1>
            <style>
                {`
            .promo-container {
                width: calc(50% - 32px);
            }

            @media (max-width: 764px) {
                .promo-container {
                    width: 100%;
                }
            }
        `}
            </style>
            <div className="flex flex-wrap justify-center items-center font-lato">
                {/* Общий контейнер для первой акции */}
                <div className="flex flex-col items-center mx-4 promo-container">
                    <div className="promotion-container" style={{ height: '400px', width: '100%' }}>
                        <img src="/promotions_1.jpeg" alt="Торт 1" className="promotion-image" style={{ height: '100%', width: 'auto' }} />
                    </div>
                    <div className="text-container">
                        <div className="text-2xl font-bold font-lora my-2">3 любых торта – бесплатная доставка!</div>
                        <div className="my-4">
                            <p>Закажите 3 абсолютно любых торта (размер, вес и цена – не важны) и мы доставим их до Вашего порога абсолютно бесплатно!</p>
                        </div>
                    </div>
                </div>
                {/* Общий контейнер для второй акции */}
                <div className="flex flex-col items-center mx-4 promo-container">
                    <div className="promotion-container" style={{ height: '400px', width: '100%' }}>
                        <img src="/promotions_2.jpeg" alt="Торт 2" className="promotion-image" style={{ height: '100%', width: 'auto' }} />
                    </div>
                    <div className="text-container">
                        <div className="text-2xl font-bold font-lora my-2">Предновогодняя скидка 15%!</div>
                        <div className="my-4">
                            <p>Весь декабрь при заказе торта с сайта, вы получаете гарантированную скидку в 15%!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotions;
