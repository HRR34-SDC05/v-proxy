import React from 'react';
import styled from 'styled-components';
import { connect } from 'unistore/react';
import colors from '../styles.js';

const Container = styled.div`
  float: left;
  min-width: 13em;
`;

const Header = styled.p`
  margin-bottom: 0;
`;

const Bar = styled.span`
  display: inline-block;
  background-color: ${colors.grey};
  width: 180px;
  height: 10px;
`;
const FilledBar = styled.span`
  display: inline-block;
  background-color: ${colors.gold};
  margin-left: calc(-1 * (198px + ${p => 0.65 * String(p.rating).length}em));
  width: ${p => (180 / p.totalRatings) * p.rating}px;
  height: 10px;
`;
const NumericalRating = styled.span`
  padding-left: 1em;
`;

const RatingSnapshot = ({ ratings }) => {
  const displayedRatings = ratings.slice();
  const totalRatings = displayedRatings.reduce((acc, cur) => acc + cur, 0);

  return (
    <Container>
      <Header>Rating Snapshot</Header>
      {displayedRatings.reverse().map((rating, i) => (
        <div key={i}>
          {5 - i}
          ★: <Bar />
          <NumericalRating>{rating}</NumericalRating>
          <FilledBar rating={rating} totalRatings={totalRatings} />
        </div>
      ))}
    </Container>
  );
};

export default connect('ratings')(RatingSnapshot);
