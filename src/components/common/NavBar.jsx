import styled from 'styled-components';
import { IcWish, IcTravel, IcSearch, IcMessage, IcProfile } from 'assets';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [isActive, setIsActive] = useState(true);

  function NavHandle() {
    setIsActive(!setIsActive);
    console.log(isActive);
  }

  return (
    <StyledFooter>
      <StyledNavToggle>
        <IcSearch />
        <span>둘러보기</span>
      </StyledNavToggle>

      {isActive ? (
        <>
          <Link to="/wishlist">
            <StyledNavToggle onClick={() => NavHandle()}>
              <IcWish />
              <span>위시리스트</span>
            </StyledNavToggle>
          </Link>
          <Link to="/">
            <StyledNavActive>
              <IcTravel />
              <span>여행</span>
            </StyledNavActive>
          </Link>
        </>
      ) : (
        <>
          <Link to="/wishlist">
            <StyledNavActive>
              <IcWish />
              <span>위시리스트</span>
            </StyledNavActive>
          </Link>
          <Link to="/">
            <StyledNavToggle onClick={() => NavHandle()}>
              <IcTravel />
              <span>여행</span>
            </StyledNavToggle>
          </Link>
        </>
      )}

      <StyledNavToggle>
        <IcMessage />
        <span>메세지</span>
      </StyledNavToggle>
      <StyledNavToggle>
        <IcProfile />
        <span>프로필</span>
      </StyledNavToggle>
    </StyledFooter>
  );
}

export default NavBar;

const StyledFooter = styled.footer`
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

const StyledNavToggle = styled.div`
  width: 4.4rem;
  height: 3.9rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  flex-grow: 0;
  cursor: pointer;

  height: 3.9rem;
  color: ${(props) => props.theme.colors.airGray2};
  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    span {
      color: ${(props) => props.theme.colors.airBlack};
      font-weight: bold;
    }
    svg > path {
      fill: ${(props) => props.theme.colors.airPink};
    }
  }
`;

const StyledNavActive = styled(StyledNavToggle)`
  span {
    color: ${(props) => props.theme.colors.airBlack};
    font-weight: bold;
  }
  svg > path {
    fill: ${(props) => props.theme.colors.airPink};
  }
`;
