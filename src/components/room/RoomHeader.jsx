import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client } from 'libs/api';
import HeartButton from 'components/common/HeartButton';
import styled from 'styled-components';
import { icBack } from 'assets';

function RoomHeader({ id, like }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(like);

  return (
    <StyledRoomHeader>
      <button onClick={() => navigate(-1)} />
      <HeartButton
        isLiked={isLiked}
        toggleHeart={async () => {
          await client.patch(`/wish/${id}`, {
            like: !isLiked,
          });
          setIsLiked(!isLiked);
        }}
      />
    </StyledRoomHeader>
  );
}

export default RoomHeader;

const StyledRoomHeader = styled.div`
  position: absolute;
  padding: 2.3rem 2.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 3.2rem;
    height: 3.2rem;
  }

  button:first-child {
    background: no-repeat center/cover url(${icBack});
  }
`;
