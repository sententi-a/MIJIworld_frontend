import { useEffect } from "react";
import styles from "../styles/CustomOverlay.module.css";

// Clarify kakao type
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

interface KakaoMapProps {
  latitude: number;
  longitude: number;
  mapId: number;
  name: string;
  address?: string;
}

export default function useKakaoMap_({
  latitude,
  longitude,
  mapId,
  name,
  address,
}: KakaoMapProps) {
  useEffect(() => {
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(
      "제주특별자치도 제주시 첨단로 242",
      // address,
      (result: any, status: any) => {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);

          const content =
            `<div class=${styles.customoverlay}>` +
            `<a href="https://map.kakao.com/link/map/${mapId}" target="_blank">` +
            `    <span class="title">📍 ${name}</span>` +
            "</a>" +
            "</div>";

          const customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: coords,
            content: content,
            yAnchor: 1,
          });
        }
      }
    );
  }, []);
}
