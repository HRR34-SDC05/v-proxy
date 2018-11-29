/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount, shallow } from "enzyme";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import App from "../src/components/App";
import ProductDetails from "../src/components/ProductDetails";
// import Quantity from "../src/components/Quantity"

describe("App component", () => {
  it("should render correctly", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
  it("state should contain product property", () => {
    const wrapper = mount(<App />);
    const state = wrapper.state().product;
    expect(state).toBe(null);
  });
});

describe("componentDidMount function", () => {
  const wrapper = shallow(<App />);
  const spy = jest.spyOn(App.prototype, "componentDidMount");
  const mockData = [
    {
      id: 0,
      name: "Tent",
      rating: 3.5,
      reviewCount: 32,
      itemNum: 0,
      price: 356,
      color: "Gray",
      image: "https://my.favorite.photo.jpg"
    }
  ];
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet("http://localhost:3001/data/0").reply(200, mockData);

    axios.get("http://localhost:3001/data/0").then(res => {
      console.log(res.data);
    });
  });
  it("should be invoked", () => {
    expect(spy).toHaveBeenCalled();
  });
  // it("sets the state property product", async () => {
  //   await expect(wrapper.state().product).toEqual(mockData)
  // })
});

// describe("Quantity component", () => {
//   const wrapper = shallow(<Quantity/>);
//   const buttonInc = wrapper.find('[data-test="inc-button"]');
//   const buttonDec = wrapper.find('[data-test="dec-button"]');
//   it("increment button should increase state by 1") {
//     expect(wrapper1.state().counter).toBe(1);
//     buttonInc.simulate('click');

//     expect(wrapper1.state().counter).toBe(2);
//   };
//   it("decrement button should decrease state by 1") {
//     buttonInc.simulate('click');
//     buttonInc.simulate('click');
//     expect(wrapper1.state().counter).toBe(3);
//     buttonDec.simulate('click');

//     expect(wrapper1.state().counter).toBe(2);
//   };

// });
