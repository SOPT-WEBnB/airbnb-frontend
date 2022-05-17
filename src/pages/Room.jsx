import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { client } from 'libs/api';
import RoomHeader from 'components/room/RoomHeader';
import RoomInfo from 'components/room/RoomInfo';
import RoomFooter from 'components/room/RoomFooter';
import styled from 'styled-components';

function Room() {
  const { id: roomID } = useParams();
  const [roomInfo, setRoomInfo] = useState([]);
  const navigate = useNavigate();

  const getRoomInfo = async () => {
    const { data } = await client.get('/room');
    if (roomID > data.length) navigate('/');
    setRoomInfo(data[roomID - 1]);
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
    </StyledRoom>
  );
}

export default Room;

const StyledRoom = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
