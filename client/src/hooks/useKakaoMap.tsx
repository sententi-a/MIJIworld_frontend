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

const CustomOverlay = styled.div`
  position: relative;
  bottom: 85px;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  float: left;
  a {
    display: block;
    text-decoration: none;
    color: #000;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    background: #d95050;
    background: #d95050
      url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
      no-repeat right 14px center;
  }
  .title {
    display: block;
    text-align: center;
    background: #fff;
    margin-right: 35px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
  }
  :after {
    content: "";
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
  }
`;
