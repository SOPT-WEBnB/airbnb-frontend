import { useLocation } from 'react-router-dom';
import HomeInfo from 'components/home/HomeInfo';
import NavBar from 'components/common/NavBar';
import styled from 'styled-components';

function Home() {
  const location = useLocation();
  const state = location.state;

  return (
    <StyledHome>
      <HomeInfo roomInfo={state} />
      <NavBar />
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;

  h1 {
    margin-right: 23.9rem;
    margin-top: 8.4rem;
    margin-bottom: 2.2rem;

    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  h2 {
    margin-right: 23.9rem;
    margin-top: 4.8rem;

    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;
