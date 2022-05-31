import styled from 'styled-components';

function WishHeader({ category }) {
  return <StyledWishHeader>{category}</StyledWishHeader>;
}

export default WishHeader;

const StyledWishHeader = styled.h1`
  padding: 0rem 2.4rem 2.4rem 2.4rem;
  word-break: keep-all;
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 600;
  width: 100%;
`;
