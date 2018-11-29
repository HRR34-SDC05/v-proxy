import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import App from './app.js';

// This test suit relies on test data specified in '../../setupTests.js'

const testData = global.TESTdata;

describe('Results component', () => {
  fetch.mockResponse(JSON.stringify(testData));

  const w = mount(<App />);
  it('should render "reviews" to the page', () => {
    expect(w.html().toLowerCase()).to.include('reviews');
  });

  it('should render the correct number of stars', () => {
    w.update();
    const renderedStars = w.find('ReviewHeader__Star').filter('[filled=true]')
      .length;
    const targetStarNumber = testData.reduce((acc, cur) => acc + cur.rating, 0);
    expect(renderedStars).to.equal(targetStarNumber);
  });

  it('should render whether the product is recommended', () => {
    expect(w.html().toLowerCase()).to.include('i recommend ');
    expect(w.html().toLowerCase()).to.include('i do not recommend ');
  });

  it('should render the correct number of 1-star ratings', () => {
    const rendered1StarRatings = +w
      .find('RatingSnapshot__NumericalRating')
      .at(4)
      .text();

    const expected1StarRatings = testData.reduce(
      (acc, cur) => (cur.rating === 1 ? acc + 1 : acc),
      0,
    );

    expect(rendered1StarRatings).to.equal(expected1StarRatings);
  });

  it('should render the correct number of 2-star ratings', () => {
    const rendered2StarRatings = +w
      .find('RatingSnapshot__NumericalRating')
      .at(3)
      .text();

    const expected2StarRatings = testData.reduce(
      (acc, cur) => (cur.rating === 2 ? acc + 1 : acc),
      0,
    );

    expect(rendered2StarRatings).to.equal(expected2StarRatings);
  });

  it('should render the correct average rating', () => {
    const sumOfRatings = testData.reduce((acc, cur) => acc + cur.rating, 0);
    const avgRating = sumOfRatings / testData.length;

    expect(w.find('AverageRating__Container').text()).to.include(
      String(avgRating.toPrecision(3)),
    );
  });

  it('should render the date', () => {
    w.find('ReviewHeader__PostedDate').forEach((node, i) => {
      const currectDate = new Date(testData[i].posting_date);
      expect(node.text()).to.include(currectDate.getFullYear());
      expect(node.text()).to.include(currectDate.getDate());
    });
  });
});

describe('Sorting the reviews', () => {
  fetch.mockResponse(JSON.stringify(testData));
  const w = mount(<App />);

  it('should be able to sort the reviews from highest to lowest rating', () => {
    w.update();
    w.find('SortSelector__SortPicker')
      .at(0)
      .simulate('change', { target: { value: 'ratingHighToLow' } });

    const sortedData = testData.sort((a, b) => b.rating - a.rating);
    w.find('ReviewHeader').forEach((node, i) => {
      const rendered = node
        .find('span')
        .first()
        .html();

      expect(rendered).to.include(`${sortedData[i].rating} out of 5 stars`);
    });
  });

  it('should be able to sort the reviews from lowest to highest rating', () => {
    const sortedData = testData.sort((a, b) => a.rating - b.rating);

    w.find('SortSelector__SortPicker')
      .at(0)
      .simulate('change', { target: { value: 'ratingLowToHigh' } });

    w.find('ReviewHeader').forEach((node, i) => {
      const rendered = node
        .find('span')
        .first()
        .html();

      expect(rendered).to.include(`${sortedData[i].rating} out of 5 stars`);
    });
  });

  it('should be able to sort the reviews by helpfulness', () => {
    const sortedData = testData.sort((a, b) => b.helpful - a.helpful);

    w.find('SortSelector__SortPicker')
      .at(0)
      .simulate('change', { target: { value: 'mostHelpful' } });

    w.find('ReviewHeader').forEach((node, i) => {
      const rendered = node
        .find('span')
        .first()
        .html();

      expect(rendered).to.include(`${sortedData[i].rating} out of 5 stars`);
    });
  });

  it('should be able to sort the reviews by date', () => {
    const sortedData = testData.sort(
      (a, b) => new Date(b.posting_date) - new Date(a.posting_date),
    );

    w.find('SortSelector__SortPicker')
      .at(0)
      .simulate('change', { target: { value: 'mostRecent' } });

    w.find('ReviewHeader').forEach((node, i) => {
      const rendered = node
        .find('span')
        .first()
        .html();

      expect(rendered).to.include(`${sortedData[i].rating} out of 5 stars`);
    });
  });
});

describe('Updating the helpfulness data', () => {
  fetch.mockResponse(JSON.stringify(testData));
  const w = mount(<App />);

  it('should be able to increment the helpfulness data', () => {
    w.update();
    const helpfulnessNode = w.find('Review__HelpfulData').first();
    const helpfulStr = helpfulnessNode.text();
    const helpfulNum = +helpfulStr.match(/\d/g).join('');

    helpfulnessNode.simulate('click');

    expect(
      +helpfulnessNode
        .text()
        .match(/\d/g)
        .join(''),
    ).to.equal(helpfulNum + 1);
  });

  it('should be able to increment the unhelpfulness data', () => {
    const helpfulnessNode = w.find('Review__HelpfulData').at(1);
    const unhelpfulStr = helpfulnessNode.text();
    const unhelpfulNum = +unhelpfulStr.match(/\d/g).join('');

    helpfulnessNode.simulate('click');

    expect(
      +helpfulnessNode
        .text()
        .match(/\d/g)
        .join(''),
    ).to.equal(unhelpfulNum + 1);
  });

  it('should throw an error if an incorrect value is incremented', () => {
    const incrementingBadValue = () => w.instance().incrementValue('bob');
    expect(incrementingBadValue).to.throw();
  });
});
