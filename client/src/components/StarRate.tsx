import styled from "styled-components";

interface StarRateProps {
  rate: number;
}

export default function StarRate({ rate }: StarRateProps) {
  const width = (rate / 5) * 7 + "vw";

  return (
    <>
      <StarsWrapper>
        <FilledStarWrapper style={{ width: width }}>
          <FilledStarImg src={require("../assets/images/icon/star_full.png")} />
        </FilledStarWrapper>
        <EmptyStarImg src={require("../assets/images/icon/star_bin.png")} />
      </StarsWrapper>
    </>
  );
}

const StarsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1vw;
  font-weight: 500;
  margin-bottom: 10px;
`;

const FilledStarWrapper = styled.div`
  position: absolute;
  overflow: hidden;
`;

const FilledStarImg = styled.img`
  z-index: 10;
  width: 7vw;
`;

const EmptyStarImg = styled.img`
  width: 7vw;
  top: 0;
`;
