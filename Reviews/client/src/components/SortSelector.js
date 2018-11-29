import React from 'react';
import styled from 'styled-components';
import { connect } from 'unistore/react';
import { actions } from '../storeAndActions.js';

const Container = styled.div`
  float: right;
  padding-left: 50%;
`;
const SortPicker = styled.select`
  background-color: white;
  text-align-last: right;
  width: ${p => p.wordLength - 1.5}em;
  border: none;
  font-size: 1em;
`;

const SortSelector = ({ sortDirection, sortReviewsBy }) => (
  <Container>
    <span>Sort By:</span>
    <SortPicker
      value={sortDirection}
      wordLength={sortDirection.length}
      onChange={e => sortReviewsBy(e.target.value)}
    >
      <option value="mostRecent">Most Recent</option>
      <option value="ratingHighToLow">Highest to Lowest Rating</option>
      <option value="ratingLowToHigh">Lowest to Highest Rating</option>
      <option value="mostHelpful">Most Helpful</option>
    </SortPicker>
  </Container>
);

export default connect(
  'sortDirection',
  actions,
)(SortSelector);
