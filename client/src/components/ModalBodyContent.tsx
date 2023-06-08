import styled from "styled-components";
import {
  Text,
  Image,
  Horizontal,
  Toggle,
  Box,
  Input,
  Button,
} from "./common/index";
import ReviewCard from "./modal/ReviewCard";
import MenuCard from "./modal/MenuCard";
import RestMap from "./RestMap";
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useTicketForm from "../hooks/useTicketForm";
import DayPicker from "./DayPicker";
import dateToString from "../utils/dateToString";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function ModalBodyContent({ restInfo }: any) {
  const {
    handleOnChange,
    getTicketFormLabels,
    ticketData,
    date,
    setDate,
    textPositions,
  } = useTicketForm();

  return (
    <>
      <RestOverview>
        <Text text={restInfo.restNameKr} bold={true} size="t2" />
        <Horizontal>
          <Text text={"영업 시간 | "} bold={true} />
          <Text text={restInfo.restBusinessHour} />
        </Horizontal>
        <Toggle showComponent={<RestMap restInfo={restInfo} />}>
          {(isDown) => (
            <Horizontal>
              <Text text={`${isDown ? "▼" : "▶"} 주소 | `} bold={true} />
              <Text text={restInfo.restAddress} />
            </Horizontal>
          )}
        </Toggle>
        <Text
          text={restInfo.restIntroduction}
          style={{
            backgroundColor: "#fafafa",
            borderRadius: "40px",
          }}
        />
      </RestOverview>

      <RestMenu>
        <Text
          text={`잘 먹겠습니다!\n${restInfo.countryWord}`}
          style={{ fontWeight: 500 }}
        />
        <Horizontal>
          {[1, 2, 3].map((id) => (
            <MenuCard restName={restInfo.restName} menuId={id} />
          ))}
        </Horizontal>
      </RestMenu>

      <RestExterior>
        {/* TODO: 이것도 ImageSlide 같은 컴포넌트로 만들어서 깔끔하게 보이게 하기  */}
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
                  src={require(`../assets/images/restaurant/${restInfo.restName}/slide0${elem}.jpg`)}
                  style={{ width: "70%" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </RestExterior>

      <RestReview>
        <Text text={`${restInfo.restNameKr} 평점 보기`} fancy={true} />
        <Horizontal gap="2vw">
          {["naver", "kakao"].map((elem) => (
            <ReviewCard mapType={elem} rate={4.5} url={`www.${elem}map.com`} />
          ))}
        </Horizontal>
      </RestReview>

      <RestTicket>
        <Text
          text="Eat the World, Meet the World!"
          fancy={true}
          style={{ color: restInfo.countryNameColor }}
        />
        <Text text="나만의 여행 티켓 만들기" size="t5" />
        <Box style={{ position: "relative" }}>
          <Image
            src={require(`../assets/images/restaurant/${restInfo.restName}/ticket@2x.png`)}
            size="xlarge"
          />

          <DayPicker date={date} setDate={setDate} />
          <Text
            text={dateToString(date)}
            size="t6"
            bold={true}
            style={{ ...textPositions["date"] }}
          />
          {getTicketFormLabels().map((elem) => {
            return (
              <>
                <Input
                  label={elem.label}
                  handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e, elem.name)
                  }
                />
                <Text
                  text={ticketData[elem.name]}
                  style={{ ...textPositions[elem.name] }}
                />
              </>
            );
          })}
          <Button label="다운로드" size="small" />
        </Box>
      </RestTicket>
    </>
  );
}

interface ModalBodyProps {
  children: React.ReactNode;
}

function ModalBody({ children }: ModalBodyProps) {
  return <div>{children}</div>;
}

interface RestOverviewProps {
  children: React.ReactNode;
}

function RestOverview({ children }: RestOverviewProps) {
  return <div style={{ textAlign: "center" }}>{children}</div>;
}

interface RestMenuProps {
  children: React.ReactNode;
}

function RestMenu({ children }: RestMenuProps) {
  return <div style={{}}>{children}</div>;
}

interface RestExteriorProps {
  children: React.ReactNode;
}

function RestExterior({ children }: RestExteriorProps) {
  return <div style={{}}>{children}</div>;
}

interface RestReviewProps {
  children: React.ReactNode;
}

function RestReview({ children }: RestReviewProps) {
  return <div style={{}}>{children}</div>;
}

interface RestTicketProps {
  children: React.ReactNode;
}

function RestTicket({ children }: RestTicketProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px",
      }}
    >
      {children}
    </div>
  );
}
