import { useEffect, useState } from "react";
import { icFillHeartBtn, icUnfillHeartBtn } from 'assets';
import styled from 'styled-components';

function HeartButton({ isLiked, toggleHeart }) {
  return (
    <StyledHeartButton onClick={() => toggleHeart()}>
      {isLiked ? <img src={icFillHeartBtn} /> : <img src={icUnfillHeartBtn} />}
    </StyledHeartButton>
  );
}

export default HeartButton;

const StyledHeartButton = styled.button`
  background: transparent;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;
