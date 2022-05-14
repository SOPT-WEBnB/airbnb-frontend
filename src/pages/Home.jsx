import styled from 'styled-components';

function Home() {
  return (
    <StyledHome>
      Home
      <button>숙소 검색하기</button>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  button {
    background-color: ${(props) => props.theme.colors.airPink};
    color: ${(props) => props.theme.colors.airWhite};
  }
`;
