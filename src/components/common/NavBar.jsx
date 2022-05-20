import styled from 'styled-components';
import { icTravel, icWish, icSearch, icMessage, icProfile } from 'assets';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <StyledFooter>
      <StyledNavToggle>
        <img src={icSearch} />
        <span>둘러보기</span>
      </StyledNavToggle>
      <Link to="/wishlist">
        <StyledNavToggle>
          <img src={icWish} />
          <span>위시리스트</span>
        </StyledNavToggle>
      </Link>
      <Link to="/">
        <StyledNavToggle>
          <img src={icTravel} />
          <span>여행</span>
        </StyledNavToggle>
      </Link>
      <StyledNavToggle>
        <img src={icMessage} />
        <span>메세지</span>
      </StyledNavToggle>
      <StyledNavToggle>
        <img src={icProfile} />
        <span>프로필</span>
      </StyledNavToggle>
    </StyledFooter>
  );
}

export default NavBar;

const StyledFooter = styled.footer`
  position: fixed;
  width: min(42rem, 100%);
  bottom: 0;
  display: flex;
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

  color: ${(props) => props.theme.colors.airGray2};
  height: 3.9rem;

  &:hover {
    span {
      color: ${(props) => props.theme.colors.airBlack};
      font-weight: bold;
    }
  }
  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
