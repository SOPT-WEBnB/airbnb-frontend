import { icBackToWishlist } from 'assets';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import WishHeader from 'components/wish/WishHeader';
import React, { useEffect, useState } from 'react';
import { client } from 'libs/api';
import WishDetail from 'components/wish/WishDetail';
import { useNavigate } from 'react-router-dom';

function Wish() {
  const { category } = useParams();
  const [wishDetail, setWishDetail] = useState([]);
  const navigate = useNavigate();

  const getWishDetail = async () => {
    const { data } = await client.get('/wish');
    setWishDetail(data);
  };

  useEffect(() => {
    getWishDetail();
  }, []);

  return (
    <StyledWish>
      <button onClick={() => navigate(-1)} />
      <WishHeader category={category} />
      <WishDetail detail={wishDetail} setWishDetail={setWishDetail} />
    </StyledWish>
  );
}

export default Wish;

const StyledWish = styled.div`
  & > button {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 2.4rem;
    margin-top: 0.6rem;
    margin-bottom: 4.6rem;
    background: no-repeat center/cover url(${icBackToWishlist});
  }
`;
