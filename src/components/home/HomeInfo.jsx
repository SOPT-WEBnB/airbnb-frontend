import styled from 'styled-components';
import { icHand } from 'assets';

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
      <StyledPrevious>
        <p>Geunhwa-dong,Chuncheon</p>
        <span>2022년 1월 12일 - 2022년 1월 14일</span>
        <p>joyang-dong,Sokcho</p>
        <span>2021년 12월 5일 - 2021년 12월 6일</span>
        <p>jayang-dong,Daejeon</p>
        <span>2021년 6월 17일 - 2021년 7월 1일</span>
      </StyledPrevious>
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

const StyledPrevious = styled.div``;
