import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcWish, IcTravel, IcSearch, IcMessage, IcProfile } from 'assets';

function NavBar({ category }) {
  const navigate = useNavigate();

  return (
    <StyledNavBar>
      <StyledNavButton>
        <IcSearch />
        <span>둘러보기</span>
      </StyledNavButton>
      <StyledNavButton onClick={() => navigate(`/wishlist`)} isActive={category === 'wishlist'}>
        <IcWish />
        <span>위시리스트</span>
      </StyledNavButton>
      <StyledNavButton onClick={() => navigate(`/`)} isActive={category === 'home'}>
        <IcTravel />
        <span>여행</span>
      </StyledNavButton>
      <StyledNavButton>
        <IcMessage />
        <span>메세지</span>
      </StyledNavButton>
      <StyledNavButton>
        <IcProfile />
        <span>프로필</span>
      </StyledNavButton>
    </StyledNavBar>
  );
}

export default NavBar;

const StyledNavBar = styled.footer`
  position: sticky;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 0.9rem 2.15rem 1rem 2.15rem;
  align-items: center;
  justify-content: space-between;
  height: 5.8rem;
  background: ${(props) => props.theme.colors.airWhite};
  border-top: 0.1rem solid ${(props) => props.theme.colors.airGray1};
`;

const StyledNavButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.4rem;
  font-size: 0.9rem;
  gap: 0.4rem;
  background: transparent;

  span {
    color: ${(props) => (props.isActive ? props.theme.colors.airBlack : props.theme.colors.airGray2)};
    font-weight: 600;
  }

  svg > path {
    fill: ${(props) => props.isActive && props.theme.colors.airPink};
  }

  &:hover {
    span {
      color: ${(props) => props.theme.colors.airBlack};
      font-weight: 600;
    }
    svg > path {
      fill: ${(props) => props.theme.colors.airPink};
    }
  }
`;
