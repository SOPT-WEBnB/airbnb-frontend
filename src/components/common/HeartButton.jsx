import { icFillHeartBtn, icUnfillHeartBtn } from 'assets';
import styled from 'styled-components';

function HeartButton({ isLiked, toggleHeart }) {
  return (
    <StyledHeartButton onClick={() => toggleHeart()}>
      <img src={isLiked ? icFillHeartBtn : icUnfillHeartBtn} />
    </StyledHeartButton>
  );
}

export default HeartButton;

const StyledHeartButton = styled.button`
  background: transparent;
`;
