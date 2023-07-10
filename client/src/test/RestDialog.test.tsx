import {
  fireEvent,
  render,
  screen,
  renderHook,
  act,
} from "@testing-library/react";
import { createQueryWrapper } from "./testUtils";
import RestDialog from "@components/Map/RestDialog";
import { useRestDialog } from "@hooks/queries/restaurant";

const mockedUseRestDialog = useRestDialog as jest.Mock<any>;
jest.mock("@hooks/queries/restaurant");

describe("RestDialog 컴포넌트 렌더링 테스트", () => {
  const restName: string = "couscous";
  const handleOnClick: jest.Mock<any, any> = jest.fn();
  const handleOnMouseLeave: jest.Mock<any, any> = jest.fn();
  const krRestName: string = "꾸스꾸스";
  const country: string = "튀니지";

  const renderDialog = () => {
    return render(
      <RestDialog
        restName={restName}
        handleOnClick={handleOnClick}
        handleOnMouseLeave={handleOnMouseLeave}
        top={20}
        left={30}
      />
    );
  };

  beforeEach(() => {
    mockedUseRestDialog.mockImplementation(() => ({
      status: "success",
      data: {
        en_name: "couscous",
        kr_name: "꾸스꾸스",
        country: "튀니지",
        header_color: "#E0E0E0",
        text_color: "#D90416",
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // useQuery hook test
  it("국가명과 음식점의 한국어 이름을 가져와야 한다.", async () => {
    // Use mocked hook to get necessary data
    const { result } = renderHook(() => useRestDialog(restName), {
      wrapper: createQueryWrapper(),
    });

    // Wait For the data to be fetched
    // await act(() => result.current.status !== "loading");

    expect(result.current.data).toBeDefined();
    expect(result.current.data?.country).toBe(country);
    expect(result.current.data?.kr_name).toBe(krRestName);
  });

  it("음식점의 국가명과 한국어 이름을 렌더링해야 한다.", () => {
    const { container } = renderDialog();

    expect(container.textContent).toContain(krRestName);
    expect(container.textContent).toContain(country);
  });

  it("클릭하면 handleOnClick이 호출되어야 한다.", () => {
    renderDialog();

    const dialog = screen.getByText(krRestName);
    fireEvent.click(dialog);

    expect(handleOnClick).toBeCalled();
  });

  it("마우스를 뗄 때 handleOnMouseLeave가 호출되어야 한다.", () => {
    renderDialog();

    const dialog = screen.getByText(krRestName);
    fireEvent.mouseLeave(dialog);

    expect(handleOnMouseLeave).toBeCalled();
  });
});
