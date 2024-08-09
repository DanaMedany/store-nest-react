import { trans } from "@mongez/localization";
import CategoryCard from "apps/front-office/home/components/CategoryCard";
import FeaturedCategoriesBanner from "apps/front-office/home/components/FeaturedCategoriesBanner";
import { useFeaturedCategories } from "shared/hooks/useFeaturedCategories";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

export default function FeaturedCategories() {
  const { sliderData, isLoading, error } = useFeaturedCategories();
  // console.log(JSON.stringify(sliderData.categories[0]), isLoading, error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="featured-categories px-3 py-[25px] relative">
      <div className="featured-categories-title mb-11 ">
        <h3 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#253D4E]">
          {sliderData.sectionTitle.value || trans("Featured Categories")}
        </h3>
      </div>
      <div className="featured-categories-body flex justify-center mb-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={sliderData.categories.length > 10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={5}
          slidesPerView={Math.min(3, sliderData.categories.length)}
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
          {sliderData.categories.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryCard item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev p-2 static !top-[8%] !important] !left-[83.75rem] z-10  bg-[#f2f3f4] transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default cursor-pointer"></div>
        <div className=" swiper-button-next p-2 absolute !top-[8%] !important] !right-7 z-10  bg-[#f2f3f4] transition-all duration-300 ease-in-out group-hover:opacity-100 hover:bg-primary-default cursor-pointer"></div>
      </div>

      <FeaturedCategoriesBanner />
    </section>
  );
}
