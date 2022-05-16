import styled from 'styled-components';
import { icTravel, icWish, icSearch, icMassage, icProfile } from 'assets';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <StyledNavBar>
      <StyledNavToggle>
        <img src={icSearch} />
        <span>둘러보기</span>
      </StyledNavToggle>
      <Link to={'./Wish'}>
        <StyledNavToggle>
          <img src={icWish} />
          <span>위시리스트</span>
        </StyledNavToggle>
      </Link>
      <Link to={'./'}>
        <StyledNavToggle>
          <img src={icTravel} />
          <span>여행</span>
        </StyledNavToggle>
      </Link>
      <StyledNavToggle>
        <img src={icMassage} />
        <span>메세지</span>
      </StyledNavToggle>
      <StyledNavToggle>
        <img src={icProfile} alt="" />
        <span>프로필</span>
      </StyledNavToggle>
    </StyledNavBar>
  );
}

export default NavBar;

const StyledNavBar = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 2.2rem 1rem;
  gap: 4.3rem;

  position: absolute;
  width: 37.5rem;
  height: 5.8rem;
  left: 0rem;
  top: 75.4rem;

  background: ${(props) => props.theme.colors.airWhite};
  border: 1px solid ${(props) => props.theme.colors.airGray2};
`;

const StyledNavToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  flex-grow: 0;

  color: ${(props) => props.theme.colors.airGray1};
  height: 3.9rem;

  &:hover {
    span {
      color: ${(props) => props.theme.colors.airBlack};
    }
  }
  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
