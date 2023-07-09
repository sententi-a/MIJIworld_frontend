import { fireEvent, render, screen } from "@testing-library/react";
import RestCard from "@components/List/RestCard";

describe("RestCard 컴포넌트 렌더링 테스트", () => {
  const restName: string = "samarkant";
  const address: string = "서울시 중구 마른내로";
  const businessHour: string = "매일 11:00 - 20:00";
  const country: string = "우즈베키스턴";
  const krRestName: string = "사마르칸트";
  const handleOnClick: jest.Mock<any, any> = jest.fn();

  const renderRestCard = () =>
    render(
      <RestCard
        restName={restName}
        address={address}
        businessHour={businessHour}
        country={country}
        krRestName={krRestName}
        handleOnClick={handleOnClick}
      />
    );

  it("음식점의 기본 정보가 보여야 한다.", () => {
    const { container } = renderRestCard();

    expect(container.textContent).toContain(country);
    expect(container.textContent).toContain(krRestName);
    expect(container.textContent).toContain(address);
    expect(container.textContent).toContain(businessHour);
  });

  it("클릭하면 handleOnClick이 호출되어야 한다.", () => {
    renderRestCard();

    const card = screen.getByText(country);

    fireEvent.click(card);
    expect(handleOnClick).toBeCalled();
  });
});
