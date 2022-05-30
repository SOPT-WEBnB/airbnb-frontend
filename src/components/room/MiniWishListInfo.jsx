import { useSetRecoilState } from 'recoil';
import { client } from 'libs/api';
import { toastState } from 'stores/toast';
import styled from 'styled-components';

function MiniWishListInfo({ list, closeModal }) {
  const messageHandler = useSetRecoilState(toastState);
  const addToWishList = async (id, title, like) => {
    await client.patch(`/wish/${id}`, {
      like: !like,
    });
    closeModal();
    messageHandler(`${title} 위시리스트에 저장 완료`);
    setTimeout(() => messageHandler(''), 1500);
  };

  return (
    <StyledMiniWishListInfo>
      <StyledMiniCategoryInfo>
        {list.map(({ id, image, title, like }) => (
          <li key={id} onClick={() => addToWishList(id, title, like)}>
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
    cursor: pointer;
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
