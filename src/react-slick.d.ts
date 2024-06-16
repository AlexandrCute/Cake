declare module 'react-slick' {
    import * as React from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        arrows?: boolean;
        [key: string]: any;
    }

    export class Slider extends React.Component<Settings> { }
    export default Slider;
}
