const dateToString = (date: Date) => {
  return (
    date.toLocaleDateString("ko-KR", {
      year: "2-digit",
      month: "long",
      day: "numeric",
    }) +
    " (" +
    date.toLocaleDateString("ko-KR", {
      weekday: "short",
    }) +
    ")"
  );
};

export default dateToString;
