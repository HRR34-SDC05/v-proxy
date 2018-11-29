import React from 'react';
import styled from 'styled-components';
import { connect } from 'unistore/react';

const Container = styled.div`
  float: right;
`;

const StarContainer = styled.div`
  width: fit-content;
  float: left;
`;

const Bar = styled.span`
  display: inline-block;
  color: #c5c5c5;
  font-size: 1.5em;
  float: left;
  width: 0;
  overflow: visible;
`;
const FilledBar = styled(Bar)`
  color: #bd5b0d;
  width: ${p => p.ratingAve * 20}%;
  height: 1.15em;
  overflow: hidden;
`;

const StarLabel = styled.span`
  float: left;
  padding-top: 0.5em;
`;

const NumericalRating = styled.span`
  padding-top: 0.5em;
  padding-left: 1em;
  float: left;
`;

const AverageRating = ({ ratings }) => {
  const displayRatings = ratings.slice();
  const ratingSum = displayRatings.reduce((acc, cur, i) => acc + cur * i, 0);
  const ratingAve =
    ratingSum / displayRatings.reduce((acc, cur) => acc + cur, 0) + 1 || 0;

  return (
    <Container>
      <p>Average Customer Ratings</p>
      <StarLabel>Overall</StarLabel>
      <StarContainer>
        <Bar className="AverageRating__Bar">★★★★★</Bar>
        <FilledBar ratingAve={ratingAve}>★★★★★</FilledBar>
      </StarContainer>
      <NumericalRating>{ratingAve.toPrecision(3)}</NumericalRating>
    </Container>
  );
};

export default connect('ratings')(AverageRating);
