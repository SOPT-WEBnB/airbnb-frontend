import React, { useState, useEffect } from 'react';
import WishListInfo from 'components/wishlist/WishListInfo';
import NavBar from 'components/common/NavBar';

import WishListHeader from 'components/wishlist/WishListHeader';
import { client } from 'libs/api';
import styled from 'styled-components';

function WishList() {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    const { data } = await client.get('/wish');
    setCategoryList(data.data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <>
      <StyledCategory>
        <WishListHeader />
        <WishListInfo list={categoryList} />
      </StyledCategory>
      <NavBar category="wishlist" />
    </>
  );
}

export default WishList;

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 5.8rem);
`;
