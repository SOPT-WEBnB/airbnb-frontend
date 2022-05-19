import styled from 'styled-components';

function WishListHeader() {
  return <StyledWishListHeader>위시리스트</StyledWishListHeader>;
}

export default WishListHeader;

const StyledWishListHeader = styled.h1`
  padding: 4rem 2.4rem;
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 600;
  width: 100%;
`;
