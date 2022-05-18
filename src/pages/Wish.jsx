import CategoryHeader from 'components/wish/WishListHeader';
import { client } from 'libs/api';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import CategoryList from 'components/wish/WishListInfo';

function Wish() {
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
      <CategoryHeader></CategoryHeader>
      <CategoryList list={categoryList}></CategoryList>
    </StyledCategory>
  );
}

export default Wish;

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
