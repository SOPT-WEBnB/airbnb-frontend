import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { icBack } from 'assets';

function RoomHeader() {
  const navigate = useNavigate();

  return (
    <StyledRoomHeader>
      <button onClick={() => navigate(-1)} />
    </StyledRoomHeader>
  );
}

export default RoomHeader;

const StyledRoomHeader = styled.div`
  position: absolute;
  padding: 2.3rem 2.2rem;
  width: 100%;

  button {
    width: 3.2rem;
    height: 3.2rem;
    background: no-repeat center/cover url(${icBack});
  }
`;
