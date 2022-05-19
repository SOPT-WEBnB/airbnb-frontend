import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { client } from 'libs/api';
import RoomHeader from 'components/room/RoomHeader';
import RoomInfo from 'components/room/RoomInfo';
import RoomFooter from 'components/room/RoomFooter';
import BottomSheet from 'components/common/BottomSheet';
import styled from 'styled-components';

function Room() {
  const { id: roomID } = useParams();
  const [roomInfo, setRoomInfo] = useState([]);
  const [isDisabled, setDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const getRoomInfo = async () => {
    const { data } = await client.get('/room');
    if (roomID > data.length) navigate('/');
    setRoomInfo(data[roomID - 1]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getRoomInfo();
  }, []);

  const { image, price } = roomInfo;

  return (
    <StyledRoom>
      <RoomHeader />
      <img src={image} />
      <RoomInfo {...roomInfo} />
      <RoomFooter price={price?.toLocaleString()} />
      {isModalOpen && (
        <BottomSheet title="위시리스트 이름 정하기" closeModal={closeModal}>
          <StyledBottomSheetContent>
            <input
              value={name}
              placeholder="최대 50자"
              maxLength="50"
              onChange={(e) => {
                setName(e.target.value);
                setDisabled(e.target.value.length === 0 ? true : false);
              }}
            />
            <div>최대 50자</div>
            <button disabled={isDisabled}>새로 만들기</button>
          </StyledBottomSheetContent>
        </BottomSheet>
      )}
    </StyledRoom>
  );
}

export default Room;

const StyledRoom = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledBottomSheetContent = styled.div`
  padding: 3.3rem 2.2rem 3.6rem 2.2rem;

  & > input {
    width: 100%;
    padding: 2rem 1.2rem 2.1rem 1.2rem;
    border: 0.1rem solid ${(props) => props.theme.colors.airGray2};
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  & > input:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme.colors.airBlack};
  }

  & > div {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme.colors.airGray2};
    margin-bottom: 6.8rem;
  }

  & > button {
    width: 100%;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    padding: 1.6rem 0 1.5rem 0;
    border-radius: 0.6rem;
    color: ${(props) => props.theme.colors.airWhite};
    background-color: ${(props) => props.theme.colors.airPink};
  }

  & > button:disabled {
    background-color: ${(props) => props.theme.colors.airGray2};
  }
`;
