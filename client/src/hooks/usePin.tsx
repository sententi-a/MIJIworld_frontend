export default function usePin() {
  const getPins = () => {
    const pins = [
      { name: "samarkant", top: 45, left: 17 },
      { name: "hemlagat", top: 28, left: 18 },
      { name: "copacabanagrill", top: 68, left: 83 },
      { name: "buenos_aires", top: 82, left: 81 },
    ];
    return pins;
  };

  return { getPins };
}
