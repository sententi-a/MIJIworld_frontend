import styled from "styled-components";
import { useEffect } from "react";

// Clarify kakao type
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

export default function RestMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options);
    // let count = 0;
    // const ps = new kakao.maps.services.Places();
    // const bounds = new kakao.maps.LatLngBounds();
  }, []);
  return (
    <>
      <MapContainer id="map"></MapContainer>
    </>
  );
}

const MapContainer = styled.div`
  width: 50%;
  //   height: 20vh;
  height: 500px;
`;
