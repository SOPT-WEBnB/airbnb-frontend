import styled from 'styled-components';
import HomeInfo from 'components/home/HomeInfo';
import HomeFooter from 'components/home/HomeFooter';

function Home() {
  return (
    <StyledHome>
      <HomeInfo />
      <HomeFooter />
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
