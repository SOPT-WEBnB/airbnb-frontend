import styled from 'styled-components';

function RoomFooter({ price }) {
  return (
    <StyledRoomFooter>
      <div>
        <span>₩{price}</span> / 박
      </div>
      <button>예약하기</button>
    </StyledRoomFooter>
  );
}

export default RoomFooter;

const StyledRoomFooter = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 7.4rem;
  padding: 1.5rem 2.2rem;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid ${(props) => props.theme.colors.airGray1};
  background-color: ${(props) => props.theme.colors.airWhite};

  div {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;

    span {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.airPink};
    color: ${(props) => props.theme.colors.airWhite};
    font-weight: 500;
    font-size: 1.4rem;
    padding: 1.2rem 1.3rem;
    border-radius: 0.8rem;
  }
`;
