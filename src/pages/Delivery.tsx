import { FC } from "react";

const Delivery: FC = () => {
    return (
        <div className="container mx-auto min-h-[83vh] w-full max-w-6xl p-4" style={{ marginBottom: '40px' }}>
            <h1 className="text-4xl font-bold font-lato text-center mb-8">
                Доставка
            </h1>
            <div>
                <div className="mb-20">
                    <div className="flex flex-wrap items-center">
                        <div className="mr-8 mb-6 sm:mb-0">
                            <img src="/delivery.svg" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                        <div className="">
                            <div className="font-lato">
                                <h2 className="text-2xl font-bold font-lato mb-4 flex items-center">По Гомелю</h2>
                                <p className="font-lato mb-10">В некоторых районах могут быть ограничения по времени доставки. <br />
                                    Точное время доставки вы можете уточнить у оператора как при оформлении заказа, так и заранее.</p>
                            </div>
                            <div className="mb-10">
                                <div className="mb-6 font-lato">
                                    <h3 className="text-xl font-lora mb-4">в пределах Центрального района</h3>
                                    <div className="flex flex-wrap">
                                        <div className="flex flex-wrap items-baseline ">
                                            <div>Срок:</div>
                                            <div className="font-lora ml-5">30 мин</div>
                                        </div>
                                        <div className="flex flex-wrap items-baseline m-0 mx-10">
                                            <div>Стоимость:</div>
                                            <div className="font-lora ml-5">от 5.50 BYN</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 font-lato">
                                    <h3 className="text-xl font-lora mb-4">за пределами Центрального районом</h3>
                                    <div className="flex flex-wrap">
                                        <div className="flex items-baseline">
                                            <div>Срок:</div>
                                            <div className="font-lora ml-5">1 час</div>
                                        </div>
                                        <div className="flex flex-wrap items-baseline m-0 mx-10 ">
                                            <div>Стоимость: </div>
                                            <div className="font-lora ml-5">от 8.50 BYN</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div>
                            <div className="mr-8 mb-6 sm:mb-0">
                                <img src="/self-call.svg" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        </div>
                        <div className="mb-6 font-lato">
                            <h2 className="text-2xl font-bold mb-4 flex items-center">Забрать самому</h2>
                            <p>г. Гомель, ул. Крестьянская, дом 22</p>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aceb585f680db81095427f22b6651075684abfa4a373240d825541c1e4542ac9c&amp;source=constructor" width="100%" height="460"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
