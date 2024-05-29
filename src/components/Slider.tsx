import { FC } from "react";
import Slider from "react-slick";
import HeroSection from "@components/HeroSection.tsx";
import HeroSectionTwy from "@components/HeroSectionTwy.tsx";
import HeroSectionThree from "@components/HeroSectionThree.tsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroSlider: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div>
        <HeroSection />
      </div>
      <div>
        <HeroSectionTwy />
      </div>
      <div>
        <HeroSectionThree />
      </div>
    </Slider>
  );
};
