import React from 'react';
import styled from 'styled-components';
import { Provider } from 'unistore/react';
import { store } from './storeAndActions.js';
import Review from './components/Review.js';
import RatingSnapshot from './components/RatingSnapshot.js';
import AverageRating from './components/AverageRating.js';
import SortSelector from './components/SortSelector.js';

const Main = styled.div`
  margin: 40px auto;
  max-width: 650px;
  line-height: 1.6;
  font-size: 18px;
  color: #444;
  padding: 0 10px;
`;

const ReviewHeader = styled.div`
  height: 12em;
`;

const Title = styled.h1`
  text-align: center;
`;

const App = () => (
  <Provider store={store}>
    <Main>
      <Title>Reviews</Title>
      <ReviewHeader>
        <RatingSnapshot />
        <AverageRating />
      </ReviewHeader>
      <SortSelector />
      <Review />
    </Main>
  </Provider>
);

export default App;
