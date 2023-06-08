import { Text, Horizontal, Toggle } from "@components/common/index";
import ReviewCard from "@components/Modal/ModalCommon/ReviewCard";
import MenuCard from "@components/Modal/ModalCommon/MenuCard";
import TicketCard from "@components/Modal/ModalCommon/TicketCard";
import RestMap from "@components/RestMap";
import RestPhotoSlide from "@components/Modal/ModalCommon/RestPhotoSlide";

export default function ModalBodyContent({ restInfo }: any) {
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

      <RestPhoto>
        <RestPhotoSlide restName={restInfo.restName} />
      </RestPhoto>

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
        <TicketCard restName={restInfo.restName} />
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

function RestPhoto({ children }: RestExteriorProps) {
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
