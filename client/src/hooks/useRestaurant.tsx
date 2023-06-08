export default function useRestaurant() {
  const headerColor = "#ef2345";
  const restName = "samarkant";
  const restNameKr = "사마르칸트";
  const restBusinessHour = "월-토 11:30 - 21:00";
  const restAddress = "서울 용산구 녹사평대로 174-11";
  const restMapId = 18577297;
  const latitude = 33.450701;
  const longitude = 126.570667;
  const restIntroduction = `사마르칸트는 녹사평로에 위치한 우즈베키스탄 음식점입니다. \n어쩌구저쩌구할 수 있어 어쩌구`;
  const menus = [
    { name: "menu1Name", explain: "menu1Explain\nExplain", price: 1000 },
    { name: "menu2Name", explain: "menu2Explain\nExplain", price: 1000 },
    { name: "menu3Name", explain: "menu3Explain\nExplain", price: 1000 },
  ];
  const countryWord = "Thank you for the meal!";
  const countryName = "우즈베키스탄";
  const countryNameColor = "#10ef10";

  const restInfo = {
    restName,
    restNameKr,
    restBusinessHour,
    restAddress,
    restMapId,
    latitude,
    longitude,
    restIntroduction,
    countryWord,
    menus,
    countryNameColor,
    headerColor,
    countryName,
  };
  //TODO: API call
  // To use API Call inside useRestaurant, it should get restaurant ID as a parameter

  const getRestReviews = () => {};

  const getRestInfos = () => {
    return restInfo;
  };

  const getRestMapInfos = () => {};

  return { getRestReviews, getRestInfos, getRestMapInfos };
}
