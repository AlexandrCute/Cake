import { FC, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Импорт иконок стрелок

const ItemDetail: FC = () => {
    const [isCompositionOpen, setCompositionOpen] = useState(false);
    const [isNutritionalValueOpen, setNutritionalValueOpen] = useState(false);

    const tabStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        borderTop: '1px solid rgba(97, 52, 62, .12)',
        padding: '10px',
        fontWeight: 'bold',
        transition: 'background-color 1s ease' // Добавлен переход для фона
    };

    const contentStyle = {
        overflow: 'hidden',
        transition: 'max-height 1s ease, padding 1s ease', // Плавный переход высоты и отступов
    };

    const contentInnerStyle = (isOpen: boolean) => ({
        maxHeight: isOpen ? '200px' : '0',
        padding: isOpen ? '10px' : '0 10px',
    });

    return (
        <div>
            <div>
                <div onClick={() => setCompositionOpen(!isCompositionOpen)} style={tabStyle}>
                    <span style={{ fontSize: '24px' }}>Состав</span>
                    {isCompositionOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div style={{ ...contentStyle, ...contentInnerStyle(isCompositionOpen) }}>
                    <div style={{ opacity: isCompositionOpen ? '1' : '0', transition: 'opacity 1s ease', paddingBottom: '20px' }}>
                        Здесь состав торта
                    </div>
                </div>
            </div>
            <div>
                <div onClick={() => setNutritionalValueOpen(!isNutritionalValueOpen)} style={tabStyle}>
                    <span style={{ fontSize: '24px' }}>Пищевая ценность на 100г продукта</span>
                    {isNutritionalValueOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div style={{ ...contentStyle, ...contentInnerStyle(isNutritionalValueOpen) }}>
                    <div style={{ opacity: isNutritionalValueOpen ? '1' : '0', transition: 'opacity 1s ease' }}>
                        <div className='flex flex-wrap gap-4 md:gap-16' style={{ justifyContent: "space-between" }}>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold text-lg md:text-xl'>
                                    Количество в упаковке
                                </span>
                                <span>
                                    здесь указать количество
                                </span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold text-lg md:text-xl'>
                                    Вес
                                </span>
                                <span>
                                    Здесь указать вес
                                </span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold text-lg md:text-xl'>
                                    Цвет
                                </span>
                                <span>
                                    Здесь указать цвет
                                </span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold text-lg md:text-xl'>
                                    Вкус
                                </span>
                                <span>
                                    Здесь указать вкус
                                </span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold text-lg md:text-xl'>
                                    Срок годности
                                </span>
                                <span>
                                    Здесь указать срок годности
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ItemDetail;
