import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

interface RestPhotoSlideProps {
  restName: string;
}

export default function RestPhotoSlide({ restName }: RestPhotoSlideProps) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, EffectFade]}
      className="mySwiper"
      loop={true}
    >
      {[1, 2, 3, 4].map((elem) => {
        return (
          <SwiperSlide>
            <img
              src={require(`@assets/images/restaurant/${restName}/slide0${elem}.jpg`)}
              style={{ width: "70%" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
