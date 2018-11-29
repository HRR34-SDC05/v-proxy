// setup file for Enzyme.js
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
global.fetch = require('jest-fetch-mock');

const testData = [
  {
    id: 94,
    product_id: 11,
    rating: 5,
    reviewer: 'Carolanne_Reynolds32',
    title: 'Ad voluptate ut asperiores quisquam.',
    body:
      'Enim perferendis beatae qui dolorem ipsum perspiciatis possimus. Aliquam ut quasi debitis asperiores qui nisi. Quidem ipsa aut qui aut ut esse autem consequatur. Quia dolore alias alias minima illo maiores. Odit temporibus illo harum.',
    recommend: true,
    helpful: 10,
    unhelpful: 6,
    posting_date: '2015-09-04T04:00:00.000Z',
  },
  {
    id: 95,
    product_id: 11,
    rating: 1,
    reviewer: 'Shyanne.Langworth72',
    title:
      'Et incidunt velit ducimus sint suscipit aliquid vitae dolorem cumque.',
    body:
      'Tempora aut fugiat exercitationem. Consequuntur recusandae impedit repellendus libero. Voluptatem beatae aspernatur officiis aliquam aperiam. Provident illum officiis suscipit. Laudantium natus asperiores officiis sequi amet explicabo. Rerum nihil porro beatae. Qui ut eveniet aut libero reiciendis ut.',
    recommend: true,
    helpful: 18,
    unhelpful: 3,
    posting_date: '2016-09-04T04:00:00.000Z',
  },
  {
    id: 96,
    product_id: 11,
    rating: 2,
    reviewer: 'Abbigail_Torphy87',
    title: 'Eaque nihil quibusdam ut unde molestiae commodi eos.',
    body:
      'Labore ut nostrum aut asperiores veniam cum maxime quaerat. Deleniti repudiandae porro id dolores error. Quisquam tempora eaque libero quia voluptas autem. Aut corrupti fugit placeat vero. Cum esse quos a harum vero animi. Aperiam est consequuntur ut quia. Dolor harum vitae aliquid.',
    recommend: false,
    helpful: 28,
    unhelpful: 11,
    posting_date: '2017-09-04T04:00:00.000Z',
  },
  {
    id: 97,
    product_id: 11,
    rating: 2,
    reviewer: 'Humphrey Ford',
    title: 'Eaque nihil ut unde molestiae commodi eos.',
    body:
      'Labore ut aut asperiores veniam cum maxime quaerat. Deleniti repudiandae porro id dolores error. Quisquam tempora eaque libero quia voluptas autem. Aut corrupti fugit placeat vero. Cum esse quos a harum vero animi. Aperiam est consequuntur ut quia. Dolor harum vitae aliquid.',
    recommend: true,
    helpful: 6,
    unhelpful: 13,
    posting_date: '2018-09-04T04:00:00.000Z',
  },
].sort((a, b) => new Date(b.posting_date) - new Date(a.posting_date));

global.TEST_ENV = true;
global.TESTdata = testData;
global.TESTratings = testData.reduce((currentRatings, review) => {
  const newRatings = currentRatings;
  newRatings[review.rating - 1]++;
  return newRatings;
}, Array(5).fill(0));
global.TESTreviews = {};
testData.forEach(review => {
  global.TESTreviews[review.id] = review;
  global.TESTreviews[review.id].modifiedKeys = {};
});
global.TESTsortDirection = 'mostRecent';
global.TESTupdateCounter = 0;

configure({ adapter: new Adapter() });
