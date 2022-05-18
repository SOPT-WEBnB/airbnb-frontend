import WishListHeader from 'components/wishlist/WishListHeader';
import { client } from 'libs/api';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import WishListInfo from 'components/wishlist/WishListInfo';

function WishList() {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    const { data } = await client.get('/category');
    setCategoryList(data);
    console.log(data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <StyledCategory>
      <WishListHeader></WishListHeader>
      <WishListInfo list={categoryList}></WishListInfo>
    </StyledCategory>
  );
}

export default WishList;

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
