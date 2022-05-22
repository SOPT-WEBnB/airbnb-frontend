import styled from 'styled-components';
import { IcWish, IcTravel, IcSearch, IcMessage, IcProfile } from 'assets';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <StyledFooter>
      <StyledNavToggle>
        <IcSearch />
        <span>둘러보기</span>
      </StyledNavToggle>

      <Link to="/wishlist">
        <StyledNavToggle>
          <IcWish />
          <span>위시리스트</span>
        </StyledNavToggle>
      </Link>

      <Link to="/">
        <StyledNavToggle>
          <IcTravel />
          <span>여행</span>
        </StyledNavToggle>
      </Link>

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
  border-top: 0.1rem solid ${(props) => props.theme.colors.airGray2};
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

  color: black;
  height: 3.9rem;
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

// const StyledNavActive = styled(StyledNavToggle)`
//   span {
//     color: ${(props) => props.theme.colors.airBlack};
//     font-weight: bold;
//   }
//   svg > path {
//     fill: ${(props) => props.theme.colors.airPink};
//   }
// `;
