import CategoryCard from "apps/front-office/home/components/CategoryCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Module } from "../../../../utils/types";
import "./style.css";

type FeaturedCategoriesPropsType = {
  module: Module;
};

export default function FeaturedCategories({
  module,
}: FeaturedCategoriesPropsType) {
  return (
    <section className="featured-categories px-3 py-[25px] relative">
      <div className="featured-categories-title mb-11 ">
        <h3 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#253D4E]">
          {module.title}
        </h3>
      </div>
      <div className="mb-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={12}
          slidesPerView={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 6, // For screens >= 640px
            },
            768: {
              slidesPerView: 8, // For screens >= 768px
            },
            1024: {
              slidesPerView: 10, // For screens >= 1024px
            },
            1536: {
              slidesPerView: 15, // For screens >= 1536px
            },
          }}
          className="w-full">
          {module.categories.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryCard item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev !absolute !left-auto !right-10 w-4 h-4 lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-5 sm:h-5 mr-2 p-2 !top-[8%] z-100 bg-[#e0ebf6] transition-all duration-300 ease-in-out hover:bg-[#3ab57c] !cursor-pointer !flex !pointer-events-auto !opacity-100"></div>
        <div className="swiper-button-next !absolute w-4 h-4 lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-5 sm:h-5 p-2 !top-[8%] z-100 bg-[#e0ebf6] transition-all duration-300 ease-in-out hover:bg-[#3ab57c] !cursor-pointer !flex !pointer-events-auto !opacity-100"></div>
      </div>
    </section>
  );
}
