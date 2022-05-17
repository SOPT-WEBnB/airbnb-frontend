import styled from 'styled-components';
import HomeInfo from 'components/home/HomeInfo';
import HomeNavBar from 'components/home/HomeNavBar';

function Home() {
  return (
    <StyledHome>
      <HomeInfo />
      <HomeNavBar />
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  position: absolute;
  width: 37.6rem;
  height: 81.2rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    position: absolute;
    width: 9.2rem;
    height: 2.4rem;
    left: 2.2rem;
    top: 8.4rem;

    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  h2 {
    position: absolute;
    width: 9.2rem;
    height: 2.4rem;
    left: 2.2rem;
    top: 41.9rem;

    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;
