import { useEffect } from "react";
import styled from "styled-components";
import styles from "../styles/CustomOverlay.module.css";

// Clarify kakao type
declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

export default function useKakaoMap({ latitude, longitude, mapId, name }: any) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
      level: 4, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options);
    const position = new kakao.maps.LatLng(latitude, longitude);

    const content =
      `<div class=${styles.customoverlay}>` +
      `<a href="https://map.kakao.com/link/map/${mapId}" target="_blank">` +
      `    <span class="title">${name}</span>` +
      "</a>" +
      "</div>";

    var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1,
    });
    // Make an info window to be shown
    // infowindow.open(map, marker);
  }, []);
}
