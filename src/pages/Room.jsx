import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { toastState } from 'stores/toast';
import { client } from 'libs/api';
import RoomHeader from 'components/room/RoomHeader';
import RoomInfo from 'components/room/RoomInfo';
import RoomFooter from 'components/room/RoomFooter';
import BottomSheet from 'components/room/BottomSheet';
import MiniWishListInfo from 'components/room/MiniWishListInfo';
import styled from 'styled-components';
import { icPlus, imgRoom } from 'assets';

function Room() {
  const { id } = useParams();
  const [isDisabled, setDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bottomSheetTitle, setBottomSheetTitle] = useState('위시리스트');
  const [wishListName, setWishListName] = useState('');
  const [wishListInfo, setWishListInfo] = useState([]);
  const messageHandler = useSetRecoilState(toastState);
  const location = useLocation();
  const roomInfo = location.state;
  // const props = location;

  // console.log(roomInfo);
  // console.log(props);

  const getWishListInfo = async () => {
    const { data } = await client.get('/wish');
    setWishListInfo(data.data);
  };

  const createNewWishList = async () => {
    await client.post('/wish', { name: wishListName });
    await client.post(`/wish/${id}`, {
      like: !roomInfo.like,
    });
    console.log(roomInfo.like);
    setBottomSheetTitle('위시리스트');
    setWishListName('');
    setIsModalOpen(false);
    messageHandler(`${wishListName} 위시리스트에 저장 완료`);
    setTimeout(() => messageHandler(''), 1500);
  };

  useEffect(() => {
    getWishListInfo();
  }, [wishListInfo]);

  return (
    <StyledRoom>
      <RoomHeader {...roomInfo} openModal={() => setIsModalOpen(true)} />
      <img src={imgRoom} />
      <RoomInfo {...roomInfo} />
      <RoomFooter {...roomInfo} />
      {isModalOpen && (
        <BottomSheet title={bottomSheetTitle} closeModal={() => setIsModalOpen(false)}>
          {bottomSheetTitle === '위시리스트' ? (
            <StyledExistingWishList>
              <StyledButtonWrapper>
                <button onClick={() => setBottomSheetTitle('위시리스트 이름 정하기')}>
                  <img src={icPlus} />
                </button>
                <div>새로운 위시리스트 만들기</div>
              </StyledButtonWrapper>
              <MiniWishListInfo roomID={id} list={wishListInfo} closeModal={() => setIsModalOpen(false)} />
            </StyledExistingWishList>
          ) : (
            <StyledNewWishList>
              <input
                value={wishListName}
                placeholder="최대 50자"
                maxLength="50"
                onChange={(e) => {
                  setWishListName(e.target.value);
                  setDisabled(e.target.value.length === 0 ? true : false);
                }}
              />
              <div>최대 50자</div>
              <button disabled={isDisabled} onClick={() => createNewWishList(roomInfo._id, roomInfo.like)}>
                새로 만들기
              </button>
            </StyledNewWishList>
          )}
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

const StyledExistingWishList = styled.div`
  padding: 2.4rem 2.2rem 2rem 2.2rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > button {
    width: 5.8rem;
    height: 5.8rem;
    border: 0.1rem solid ${(props) => props.theme.colors.airGray1};
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.colors.airWhite};
  }

  & > button > img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const StyledNewWishList = styled.div`
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
    background-color: ${(props) => props.theme.colors.airGray1};
  }
`;
