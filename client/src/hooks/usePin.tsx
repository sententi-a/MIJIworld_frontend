export default function usePin() {
  // TODO: join문 없이 핀 DB만 가져오기
  const getPins = () => {
    const pins = [
      { name: "samarkant", top: 45, left: 17 },
      { name: "hemlagat", top: 28, left: 18 },
      { name: "copacabanagrill", top: 68, left: 83 },
      { name: "buenos_aires", top: 82, left: 81 },
    ];
    return pins;
  };

  //TODO: RestDialog용 음식점 이름, 한글이름, 국가, 색상만 가져오기
  // 이건 useRestaurant에서 모든 음식점 목록 가져오고, 거기에서 특정 rest만 찾아서 리턴하도록

  return { getPins };
}
