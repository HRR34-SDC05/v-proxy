import createStore from 'unistore';

const BASE_URL = 'http://fec-reviews-dev.us-west-2.elasticbeanstalk.com';
const PRODUCT_ID = window.location.href.split('/')[
  window.location.href.split('/').length - 1
];

/* global TEST_ENV TESTreviews TESTratings TESTsortDirection TESTupdateCounter */
const TEST = typeof TEST_ENV !== 'undefined';
const store = createStore({
  reviews: TEST ? TESTreviews : {},
  ratings: TEST ? TESTratings : [0, 0, 0, 0, 0],
  sortDirection: TEST ? TESTsortDirection : 'mostRecent',
  updateCounter: TEST ? TESTupdateCounter : 0,
});

const setInitialState = () => {
  const newReviews = {};
  if (localStorage.getItem(`trailblazersProduct${PRODUCT_ID}Reviews`)) {
    store.setState(
      JSON.parse(
        localStorage.getItem(`trailblazersProduct${PRODUCT_ID}Reviews`),
      ),
    );
  }
  fetch(`${BASE_URL}/reviews/${PRODUCT_ID}`)
    .then(response => response.json())
    .then(json => {
      const ratings = json.reduce((currentRatings, review) => {
        const newRatings = currentRatings;
        newRatings[review.rating - 1]++;
        return newRatings;
      }, Array(5).fill(0));

      json.forEach(review => {
        newReviews[review.id] = review;
        newReviews[review.id].modifiedKeys = {};
      });
      store.setState({ reviews: newReviews, ratings });
      localStorage.setItem(
        `trailblazersProduct${PRODUCT_ID}Reviews`,
        JSON.stringify(store.getState()),
      );
    });
};

const updateDB = payload => {
  fetch(`${BASE_URL}/reviews/${PRODUCT_ID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
};

const actions = () => ({
  sortReviewsBy: (state, value) => ({ sortDirection: value }),

  incrementValue: ({ reviews, updateCounter }, targetId, value) => {
    if (!reviews[targetId].modifiedKeys[value]) {
      updateDB({
        reviewId: targetId,
        updatedCol: value,
        newValue: reviews[targetId][value] + 1,
      });
      reviews[targetId].modifiedKeys[value] = true;
      reviews[targetId][value] += 1;
      store.setState({ reviews, updateCounter: updateCounter + 1 });
      localStorage.setItem(
        `trailblazersProduct${PRODUCT_ID}Reviews`,
        JSON.stringify(store.getState()),
      );
    }
  },
});

setInitialState();

export { store, actions };
