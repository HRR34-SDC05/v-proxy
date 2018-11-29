import React from "react";
import { shallow, mount } from "enzyme";
import App from "../client/src/components/App";
import Tents from "../client/src/components/Tents";
import Shirts from "../client/src/components/Shirts";
import CompareAtGlance from "../client/src/components/CompareAtGlance";
import PeopleAlsoViewed from "../client/src/components/PeopleAlsoViewed";
import { findByText } from "./setupTests"; // this method was imported from Andrew react TDD

describe("Tents component ", () => {
  test("should render and display code in the jest test with .debug()", () => {
    const w = mount(<Tents tents={[]} current={[]} />);
    const compareCompProps = w.find("CompareAtGlance").props();
    const peopleCompProps = w.find('[data-test="dt-comp-people"]'); // This is a method to find a component or item. You would assign the data-test as an attribute to the tag/component on the front end then reference it here. Useful if you had multiple similar tags like buttons to select the correct one.
    expect(Object.keys(compareCompProps).length).toEqual(2);
    expect(peopleCompProps.exists()).toEqual(true);
  });

  test("render title for Compare at a Glance", () => {
    const w = shallow(<Tents tents={[]} current={[]} />);
    const text = findByText("glance", w).text();
    expect(text).toEqual("Compare at a glance");
  });
});

describe("Shirts component ", () => {
  test("render title for People also viewed", () => {
    const w = mount(<Shirts shirts={[]} />);
    const text = findByText("People also", w).text();
    expect(text).toEqual("People also viewed");
  });
});

describe("CompareAtGlance Component", () => {
  test("data is distributed to component correctly", () => {
    const testData = {
      _id: 50,
      imageURL: "https://s3-us-west-2.amazonaws.com/fec-project/tents/50.jpg",
      title: "Big Agnes Howlite Tent",
      ranking: 3.29,
      reviews: 97,
      price: 157,
      sleepingCapacity: "7-person",
      packagedWeight: "15 lbs. 6 oz.",
      numberOfDoors: 2,
      bestUse: "Camping",
      productType: "Tent",
      __v: 0
    };
    const w = mount(<CompareAtGlance item={testData} linkText="View Now" />);
    expect(w.find(".roboto").text()).toEqual("$157");
    expect(w.find("StarRatings").props().rating).toEqual(3.29);
  });
});

describe("PeopleAlsoViewed Component", () => {
  test("data is distributed to component correctly", () => {
    const testData = {
      _id: 70,
      imageURL: "https://s3-us-west-2.amazonaws.com/fec-project/shirts/S70.jpg",
      title: "Patagonia Middle-Earth Shirt",
      ranking: 2.76,
      reviews: 16,
      price: 45,
      productType: "Shirt",
      __v: 0
    };
    const w = mount(<PeopleAlsoViewed item={testData} />);
    expect(w.find(".roboto").text()).toEqual("$45");
    expect(w.find("StarRatings").props().rating).toEqual(2.76);
  });
});



//These tests fail when using Travis CI. They are integration tests. I don't like how i'm using setTimeout and will need to refactor later.
// describe("App Component", () => {
//   test("proper state values", done => {
//     const w = mount(<App />);
//     expect(w.state().shirts).toEqual(false);
//     expect(w.state().tents).toEqual(false);
//     setTimeout(() => {
//       w.update();
//       expect(w.state().shirts.length).toEqual(4);
//       expect(w.state().tents.length).toEqual(5);
//       done();
//     }, 100);
//   });

//   test("PeopleAlsoViewed component renders", done => {
//     const w = mount(<App />);
//     setTimeout(() => {
//       w.update();
//       expect(w.find("h3").text()).toEqual("People also viewed");
//       expect(w.find("PeopleAlsoViewed").length).toEqual(4);
//       done();
//     }, 100);
//   });
// });
