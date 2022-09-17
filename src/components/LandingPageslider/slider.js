import data from "../../data/data.json";
import Slide from "../LandingSlide/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      effect="fade"
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, EffectFade]}
    >
      {data &&
        data.map((slidedata, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide data={slidedata} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
