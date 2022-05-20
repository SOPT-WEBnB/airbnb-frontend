import styled from 'styled-components';
import { imgChuncheon, imgSokcho, imgDaejeon } from 'assets';
import FirstSection from './FirstSection';

function HomeInfo({ title, host }) {
  return (
    <>
      <h1>예정된 예약</h1>
      <FirstSection title={title} host={host} />
      <h2>이전 여행지</h2>
      <StyledSecondSection>
        <StyledImg>
          <img src={imgChuncheon} />
          <img src={imgSokcho} />
          <img src={imgDaejeon} />
        </StyledImg>
        <StyledInfo>
          <div>
            <p>Geunhwa-dong, Chuncheon</p>
            <span>2022년 1월 12일 - 2022년 1월 14일</span>
          </div>
          <div>
            <p>joyang-dong, Sokcho</p>
            <span>2021년 12월 5일 - 2021년 12월 6일</span>
          </div>
          <div>
            <p>jayang-dong, Daejeon</p>
            <span>2021년 6월 17일 - 2021년 7월 1일</span>
          </div>
        </StyledInfo>
      </StyledSecondSection>
    </>
  );
}

export default HomeInfo;

const StyledSecondSection = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1;

  margin-top: 2.2rem;
  margin-right: 7.2rem;
  margin-bottom: 2.2rem;
`;

const StyledImg = styled.div`
  width: 6.4rem;
  height: 22.4rem;
  margin-right: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }
`;

const StyledInfo = styled.div`
  font-family: 'AirbnbCereal_W_Md';

  height: 22.4rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

    color: ${(props) => props.theme.colors.airGray2};
  }
`;
