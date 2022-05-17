import styled from 'styled-components';
import { icHand, imgChuncheon, imgSokcho, imgDaejeon } from 'assets';

function BookingBox() {
  return (
    <>
      <h1>예정된 예약</h1>
      <StyledBookingBox>
        <StyledIcHand src={icHand} />
        <span>아직 예약된 여행이 없습니다!</span>
        <StyledSearchButton>숙소 검색하기</StyledSearchButton>
      </StyledBookingBox>
      <h2>이전 여행지</h2>
      <StyledPreiousImg>
        <img src={imgChuncheon} />
        <img src={imgSokcho} />
        <img src={imgDaejeon} />
      </StyledPreiousImg>
      <StyledPreviousInfo>
        <div>
          <p>Geunhwa-dong,Chuncheon</p>
          <span>2022년 1월 12일 - 2022년 1월 14일</span>
        </div>
        <div>
          <p>joyang-dong,Sokcho</p>
          <span>2021년 12월 5일 - 2021년 12월 6일</span>
        </div>
        <div>
          <p>jayang-dong,Daejeon</p>
          <span>2021년 6월 17일 - 2021년 7월 1일</span>
        </div>
      </StyledPreviousInfo>
    </>
  );
}

export default BookingBox;

const StyledBookingBox = styled.div`
  position: absolute;
  left: 2.2rem;
  top: 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  width: 33.1rem;
  height: 24.1rem;
  margin: 0;
  top: 13rem;

  background: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.airGray2};
  border-radius: 1rem;

  button {
    background-color: ${(props) => props.theme.colors.airPink};
    color: ${(props) => props.theme.colors.airWhite};
  }

  span {
    position: absolute;
    width: 18.3rem;
    height: 1.9rem;
    left: 7.4rem;
    top: 10.8rem;

    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

const StyledIcHand = styled.img`
  position: absolute;
  width: 4rem;
  height: 4rem;
  left: 14.5rem;
  top: 4.8rem;
`;

const StyledSearchButton = styled.button`
  position: relative;

  width: 28.6rem;
  height: 4.4rem;
  top: 17.5rem;
  border-radius: 6px;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
`;

const StyledPreiousImg = styled.div`
  position: absolute;
  width: 6.4rem;
  height: 22.4rem;
  left: 2.2rem;
  top: 46.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }
`;

const StyledPreviousInfo = styled.div`
  position: absolute;
  width: 18.1rem;
  height: 19.4rem;
  left: 10rem;
  top: 48rem;

  display: flex;
  flex-direction: column;
  gap: 4.6rem;

  p {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;

    color: ${(props) => props.theme.colors.airBlack};
  }
  span {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;

    color: ${(props) => props.theme.colors.airGray1};
  }
`;
