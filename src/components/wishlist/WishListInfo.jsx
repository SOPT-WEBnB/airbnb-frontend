import styled from 'styled-components';

function WishListInfo({ list }) {
  return (
    <StyledWishListInfo>
      <StyledCategoryInfo>
        {list.map(({ id, image, title }) => (
          <li key={id}>
            <img src={image} />
            <span>{title}</span>
          </li>
        ))}
      </StyledCategoryInfo>
    </StyledWishListInfo>
  );
}

export default WishListInfo;

const StyledWishListInfo = styled.div`
  padding: 0 2.2rem;
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
    border-radius: 0.8rem;
    object-fit: cover;
  }
`;
