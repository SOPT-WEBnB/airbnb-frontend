import styled from 'styled-components';
import HomeInfo from 'components/home/HomeInfo';
import NavBar from 'components/common/NavBar';
import { useLocation } from 'react-router-dom';

function Home() {
  let title;
  let host;

  try {
    const location = useLocation();
    const state = location.state;
    title = state.title.title;
    host = state.host.host;
  } catch (e) {
    title = 'unBooked';
    host = 'unBooked';
  }

  return (
    <StyledHome>
      <HomeInfo title={title} host={host} />
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
