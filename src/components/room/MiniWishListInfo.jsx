import styled from 'styled-components';

function MiniWishListInfo({ list }) {
  return (
    <StyledMiniWishListInfo>
      <StyledMiniCategoryInfo>
        {list.map(({ id, image, title }) => (
          <li key={id}>
            <img src={image} />
            <span>{title}</span>
          </li>
        ))}
      </StyledMiniCategoryInfo>
    </StyledMiniWishListInfo>
  );
}

export default MiniWishListInfo;

const StyledMiniWishListInfo = styled.div`
  margin-top: 2.4rem;
`;

const StyledMiniCategoryInfo = styled.div`
  display: flex;
  gap: 2.4rem;
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
    border-radius: 0.8rem;
    object-fit: cover;
  }
`;
