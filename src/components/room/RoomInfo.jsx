import { icCalendar, icMedal, icPin } from 'assets';
import styled from 'styled-components';

function RoomInfo({ title, rate, review, level, place, host, max, bedroom, bed, bathroom, month, date }) {
  return (
    <StyledRoomInfo>
      <StyledFirstSection>
        <h1>{title}</h1>
        <div>
          <span>{rate?.toFixed(1)}</span>
          <span>·</span>
          <span>후기 {review}</span>
          <span>·</span>
          <span>{level}</span>
        </div>
        <div>{place}</div>
      </StyledFirstSection>
      <StyledSecondSection>
        <div>집 전체</div>
        <div>호스트:{host}님</div>
        <div>
          <span>최대 인원 {max}명</span>
          <span>·</span>
          <span>침실 {bedroom}개</span>
          <span>·</span>
          <span>침대 {bed}개</span>
          <span>·</span>
          <span>욕실 {bathroom}개</span>
        </div>
      </StyledSecondSection>
      <StyledLastSection>
        <div>
          <img src={icMedal} />
          {host}님은 {level}입니다
        </div>
        <div>
          <img src={icPin} />
          훌륭한 숙소 위치
        </div>
        <div>
          <img src={icCalendar} />
          {month}월 {date}일 전까지 무료 취소 가능
        </div>
      </StyledLastSection>
    </StyledRoomInfo>
  );
}

export default RoomInfo;

const StyledRoomInfo = styled.div`
  padding: 0.2rem 2.2rem;

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

  div:nth-child(2) {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.8rem;
  }

  div:last-child {
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
    display: flex;
    gap: 0.4rem;
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
