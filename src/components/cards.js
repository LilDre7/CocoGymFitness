"use client";

import Link from "next/link";
import { cards } from "../utils/data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Cards() {
  // Configuración del carrusel para desktop
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 cartas en pantallas grandes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800, // Solo en pantallas grandes
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200, // Solo en pantallas grandes
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // En mobile y tablets, desactiva el carrusel
        settings: "unslick",
      },
    ],
  };

  return (
    <div className="p-5 bg-black">
      <div className="py-4 max-w-[580px] md:max-w-[700px] lg:max-w-[1000px] mx-auto">
      <h2 className="text-white text-xl pl-2 pb-4 md:text-3xl">WHY CHOOSE US</h2>
        {/* Carrusel para desktop, y stack para mobile */}
        <Slider {...settings}>
          {cards.map(
            (
              {
                title,
                icon,
                description,
                learn,
                learnIcon,
                button,
                extraClasses,
                href,
              },
              index
            ) => (
              <div key={index} className="p-2">
                <div
                  className={`${
                    extraClasses
                      ? "bg-[#c4f135]"
                      : "bg-[#2c2d2c]"
                  } rounded-2xl`}
                >
                  <Image className="w-36 h-36 ml-4" src={icon} alt="icons" />
                  <div className="mx-4 my-6">
                    <h2
                      className={`text-lg font-semibold ${
                        extraClasses ? "" : "text-white"
                      }`}
                    >
                      {title}
                    </h2>
                    <p
                      className={`text-sm py-4 ${
                        extraClasses ? "" : "text-white"
                      }`}
                    >
                      {description}
                    </p>
                    <div className="flex justify-between pb-8">
                      <Link
                        target="_blank"
                        href={href}
                        className={`flex items-center gap-2 font-semibold ${
                          extraClasses ? "text-black" : "text-white"
                        }`}
                      >
                        <p className="uppercase">{learn}</p>
                        <span>{learnIcon}</span>
                      </Link>
                      <div
                        className={`flex items-center p-2 rounded-full ${
                          extraClasses
                            ? "bg-black text-white"
                            : "bg-[#c4f135]"
                        }`}
                      >
                        <button>{button}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}
