import { icFillHeart } from 'assets';
import styled from 'styled-components';

function Toast() {
  return (
    <StyledToast>
      <img src={icFillHeart} />
      <div>토스트 메시지 내용</div>
    </StyledToast>
  );
}

export default Toast;

const StyledToast = styled.div`
  position: absolute;
  bottom: 9.8rem;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.airWhite};
  border-radius: 1.2rem;
  border: 0.1rem solid ${(props) => props.theme.colors.airGray1};
  box-shadow: 0.4rem 0.4rem 2rem rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${(props) => props.theme.colors.airBlack};

  img {
    margin-right: 0.4rem;
  }
`;
