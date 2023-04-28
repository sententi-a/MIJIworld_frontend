import styled from "styled-components";
import useKakaoMap from "../hooks/useKakaoMap";

export default function RestMap({ restInfo }: any) {
  useKakaoMap({
    latitude: restInfo.latitude,
    longitude: restInfo.longitude,
    mapId: restInfo.restMapId,
    name: restInfo.restNameKr,
  });

  console.log("호출됨");
  return (
    <>
      <MapContainer id="map"></MapContainer>
    </>
  );
}

const MapContainer = styled.div`
  width: 50%;
  height: 40vh;
  margin: 10px auto;
`;
