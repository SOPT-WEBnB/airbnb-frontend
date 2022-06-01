import { icCalendar, icMedal, icPin } from 'assets';
import styled from 'styled-components';

function RoomInfo({ name, host }) {
  return (
    <StyledRoomInfo>
      <StyledFirstSection>
        <h1>{name}</h1>
        <div>4.8 · 후기 46 · 슈퍼호스트</div>
        <div>Seoul, Korea</div>
      </StyledFirstSection>
      <StyledSecondSection>
        <div>집 전체</div>
        <div>호스트:{host}님</div>
        <div>최대 인원 4명 · 침실 1개 · 침대 2개 · 욕실 1개</div>
      </StyledSecondSection>
      <StyledLastSection>
        <div>
          <img src={icMedal} />
          {host}님은 슈퍼호스트입니다
        </div>
        <div>
          <img src={icPin} />
          훌륭한 숙소 위치
        </div>
        <div>
          <img src={icCalendar} />
          7월 11일 전까지 무료 취소 가능
        </div>
      </StyledLastSection>
    </StyledRoomInfo>
  );
}

export default RoomInfo;

const StyledRoomInfo = styled.div`
  padding: 0.2rem 2.2rem;
  flex: 1;

  & > div {
    padding: 2.2rem 0;
  }

  & > div + div {
    border-top: 0.1rem solid ${(props) => props.theme.colors.airGray1};
  }
`;

const StyledFirstSection = styled.div`
  h1 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.6rem;
    margin-bottom: 1.2rem;
    font-family: 'AirbnbCereal_W_Md';
  }

  div:last-child {
    margin-top: 0.8rem;
    font-family: 'AirbnbCereal_W_Md';
  }

  div {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const StyledSecondSection = styled.div`
  div:first-child,
  div:nth-child(2) {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  div:last-child {
    margin-top: 0.6rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
`;

const StyledLastSection = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;

  & > div + div {
    margin-top: 1rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;
