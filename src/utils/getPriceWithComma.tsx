const getPriceWithComma = (price: string | number) => {
  const priceWithComma = price
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return priceWithComma;
};

export default getPriceWithComma;
