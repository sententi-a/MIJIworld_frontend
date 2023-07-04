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
  mapId: number;
  name: string;
  address?: string;
}

export default function useKakaoMap({ mapId, name, address }: KakaoMapProps) {
  useEffect(() => {
    let map: any; // Define a variable to hold the map instance

    const loadKakaoMapsScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.kakao) {
          resolve(); // Script already loaded
        } else {
          const script = document.createElement("script");
          script.src =
            "https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_API_KEY&libraries=services";
          script.onload = (_: Event) => resolve();
          script.onerror = reject;
          document.head.appendChild(script);
        }
      });
    };

    const initializeMap = async () => {
      try {
        await loadKakaoMapsScript();
        const { kakao } = window;

        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        // 지도를 생성합니다
        map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          // "제주특별자치도 제주시 첨단로 242",
          address,
          (result: any, status: any) => {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

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

        return () => {
          // Clean up code here
          // ...
        };
      } catch (error) {
        console.error("Error loading Kakao Maps API:", error);
      }
    };

    initializeMap();
  }, []);
}
