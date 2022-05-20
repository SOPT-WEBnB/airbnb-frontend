import React from 'react';
import styled from 'styled-components';
import { icHand, imgRoom } from 'assets';

function FirstSection({ title, host }) {
  return (
    <>
      {title === 'unBooked' ? (
        <StyledFirstSection>
          <StyledIcHand src={icHand} />
          <span>아직 예약된 여행이 없습니다!</span>
          <StyledSearchButton>숙소 검색하기</StyledSearchButton>
        </StyledFirstSection>
      ) : (
        <StyledIsBooked>
          <img src={imgRoom} />
          <p>{title}</p>
          <span>{host} 님이 호스팅 하는 집 전체</span>
        </StyledIsBooked>
      )}
    </>
  );
}

export default FirstSection;

const StyledIsBooked = styled.section`
  margin: 0;
  box-sizing: border-box;
  width: 33.1rem;
  height: 27.6rem;

  background: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.airGray2};
  border-radius: 1rem;
  filter: drop-shadow(0.4rem 0.4rem 2rem rgba(0, 0, 0, 0.15));

  img {
    width: 32.9rem;
    height: 14.8rem;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  p {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.6rem;
    margin: 2.2rem 2rem 0.8rem 2rem;
    font-family: 'AirbnbCereal_W_Md';
  }
  span {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;

    margin-left: 2rem;
    margin-bottom: 3.2rem;
  }
`;

const StyledFirstSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  width: 33.1rem;
  height: 24.1rem;

  background: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.airGray2};
  border-radius: 1rem;

  button {
    background-color: ${(props) => props.theme.colors.airPink};
    color: ${(props) => props.theme.colors.airWhite};
  }

  span {
    margin-top: 2rem;

    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

const StyledIcHand = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 4.8rem;
`;

const StyledSearchButton = styled.button`
  margin-top: 4.8rem;

  width: 28.6rem;
  height: 4.4rem;
  border-radius: 0.6rem;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
`;
