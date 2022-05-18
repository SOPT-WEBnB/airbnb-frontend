import styled from 'styled-components';

function WishListHeader() {
  return (
    <StyledWishListHeader>
      <span>위시리스트</span>
    </StyledWishListHeader>
  );
}

export default WishListHeader;

const StyledWishListHeader = styled.div`
  position: absolute;
  padding: 4rem 2.4rem;
  span {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }
`;
