import { FC } from "react";

const Contacts: FC = () => {
    return (
        <div className="container mx-auto min-h-[83vh] w-full max-w-6xl p-4" style={{ marginBottom: '40px', maxWidth: '1200px', margin: 'auto' }}>
            <h1 className="text-4xl font-bold font-lato text-center mb-8">
                Контакты
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="md:w-1/3 md:mr-8 md:mb-0 mb-4">
                    <div className="font-lato">
                        <div className="flex items-center mb-4">
                            <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                                <a href="tel:+375 44 453-21-43">+375 44 453-21-43</a>
                            </div>
                            <div className="flex ml-4">
                                <a href="#" className="mr-2">
                                    <img src="/public/fgs16_telegram_rounded.svg" alt="telegram" />
                                </a>
                                <a href="#">
                                    <img src="/public/fgs16_whatsapp_rounded.svg" alt="whatsapp" />
                                </a>
                            </div>
                        </div>
                        <div className="mb-4">
                            Пн – Пт с 10:00 до 20:00
                        </div>
                        <div className="mb-4">
                            Сб – Вс Выходной
                        </div>
                        <div className="mb-4">
                            г. Гомель, ул. Крестьянская, дом 22
                        </div>
                        <div className="mb-4" style={{ color: "#4285f4" }}>
                            <a href="alexandr.kinder.99@bk.ru">sweetcake.homel@mail.ru</a>
                        </div>
                        <div className="flex mb-4">
                            <a href="#" className="mr-2">
                                <img src="/public/fgs16_vk-cl-bg.svg" alt="vk" />
                            </a>
                            <a href="#">
                                <img src="/public/instagram_contacts.svg" alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aceb585f680db81095427f22b6651075684abfa4a373240d825541c1e4542ac9c&source=constructor" width="100%" height="460"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
