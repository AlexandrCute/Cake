import { FC } from "react";

const About: FC = () => {
    return (
        <div className="container mx-auto min-h-[83vh] w-full max-w-6xl flex flex-col justify-center items-center" style={{ marginBottom: '40px' }}>
            <div className="text-4xl p-4 font-bold font-lato text-center mb-4" >
                О нас
            </div>
            <section className="p-4 flex flex-col md:flex-row justify-between items-center w-full ">
                <div className="w-full md:w-1/2 mb-10 md:mb-20 md:mr-10 ">
                    <p style={{ marginBottom: '15px' }}>Мы изготавливаем торты по традиционным рецептам с использованием самых качественных ингредиентов. Наши торты готовятся при полном и строгом соответствии всем санитарным правилам и нормам производства кондитерских изделий. Вы можете не сомневаться в качестве, в эстетичности, а также во вкусовых характеристиках наших тортов.</p>
                    <h2 style={{ marginBottom: '15px' }}>Что мы можем Вам предложить:</h2>
                    <ul style={{ marginBottom: '15px', paddingLeft: '15px', listStyleType: 'disc' }}>
                        <li>Широкий простор для фантазии с самых щедрых и обормотных наполнений,</li>
                        <li>Невысокие цены,</li>
                        <li>По-настоящему высокие лакомства,</li>
                        <li>Только ПЕРВУЮ свежесть,</li>
                        <li>И только лучшее качество.</li>
                    </ul>
                    <p style={{ marginBottom: '15px' }}>У нас Вы всегда можете заказать вкуснейшие торты прямо домой или в офис, в течение часа получить их и подать к столу, угостить гостей, друзей, коллег, а также самостоятельно убедиться в том, что наши торты удовлетворят любой, даже самый изысканный вкус, а также порадуют глаз.</p>
                    <p>
                        Мы всегда рады покупателям и ждем Ваших заказов!
                    </p>
                </div>
                <img src="/cook.jpeg" alt="Повар украшает десерты" className="w-full md:w-1/2" style={{ maxWidth: '100%', marginBottom: '20px' }} />
            </section>

            <div className="flex flex-col md:flex-row w-full justify-center md:justify-between">
                <section className="p-4 w-full md:w-auto md:mr-20">
                    <h2 className="text-2xl font-bold font-lato">Обновление каталога</h2>
                    <p className="font-lato">Каталог регулярно расширяется и пополняется</p>
                </section>
                <section className="p-4 w-full md:w-auto md:mr-20">
                    <h2 className="text-2xl font-bold font-lato">Гарантия возврата</h2>
                    <p className="font-lato">Не понравился товар? Мы вернем деньги</p>
                </section>
                <section className="p-4 w-full md:w-auto">
                    <h2 className="text-2xl font-bold font-lato">Быстрая доставка</h2>
                    <p className="font-lato">Быстрая доставка по всему Гомелю</p>
                </section>
            </div>
        </div>
    );
};

export default About;
