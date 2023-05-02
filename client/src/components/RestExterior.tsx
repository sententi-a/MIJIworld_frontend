import styled from "styled-components";
import { useEffect } from "react";
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

interface RestExteriorProps {
  restName: string;
}

export default function RestExterior({ restName }: RestExteriorProps) {
  // Set carousel navigation button color to gray
  useEffect(() => {
    document.documentElement.style.setProperty("--swiper-theme-color", "#999");
  }, []);

  return (
    <>
      <RestExteriorWrapper>
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
                  src={require(`../assets/images/restaurant/${restName}/slide0${elem}.jpg`)}
                  style={{ width: "70%" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </RestExteriorWrapper>
    </>
  );
}

const RestExteriorWrapper = styled.div`
  width: 50vw;
  margin-top: 10vh;
  margin: 10vh auto;
`;
