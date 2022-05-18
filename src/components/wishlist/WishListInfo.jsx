import styled from 'styled-components';

function WishListInfo(categoryList) {
  const list = categoryList.list;

  const getCategoryInfo = () => {
    return list.map(({ id, image, title }) => (
      <li key={id}>
        <img src={image}></img>
        <span>{title}</span>
      </li>
    ));
  };

  return (
    <StyledWishListInfo>
      <StyledCategoryInfo>{getCategoryInfo()}</StyledCategoryInfo>
    </StyledWishListInfo>
  );
}

export default WishListInfo;

const StyledWishListInfo = styled.div`
  border-style: dashed;
  padding: 10.4rem 2.2rem;
  gap: 1.4rem;
`;

const StyledCategoryInfo = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  li > span {
    height: 1.7rem;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.68rem;
  }

  img {
    width: 5.8rem;
    height: 5.8rem;
    border-radius: 8px;
  }
`;
