import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { imgRoom } from 'assets';

function WishListInfo({ list }) {
  const navigate = useNavigate();

  return (
    <StyledWishListInfo>
      <StyledCategoryInfo>
        {list.map(({ _id, name }) => (
          <li
            key={_id}
            onClick={() => {
              navigate(`/wish/${_id}`);
            }}>
            <img src={imgRoom} />
            <span>{name}</span>
          </li>
        ))}
      </StyledCategoryInfo>
    </StyledWishListInfo>
  );
}

export default WishListInfo;

const StyledWishListInfo = styled.div`
  padding: 0 2.2rem;
  padding-bottom: 1.6rem;
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
    cursor: pointer;
  }

  li > span {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.68rem;
    word-break: keep-all;
  }

  img {
    width: 5.8rem;
    height: 5.8rem;
    border-radius: 0.8rem;
    object-fit: cover;
  }
`;
