import React from "react"
//const React = require('react');
//const {shallow, mount} = require('enzyme');
//const Features = require("./client/src/components/Features.jsx");
import Enzyme, {shallow, mount} from "enzyme";
import Productdescriptions from '../client/src/App.jsx';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter()});

describe("App component", ()=>{
  it("renders?", () => {

    const wrapper = shallow(<Productdescriptions />);
    expect(wrapper.exists()).toBe(true);
  })
  it("Testing if clicking the button will act to change the rendered state", () => {
    const wrapper = shallow(<Productdescriptions />);
    expect(wrapper.props().children[0].props.children).toEqual("Features");
    wrapper.find('#switchState').simulate('click');
    expect(wrapper.props().children[0].props.children).toEqual("TechSpecs")
  })
})

 //console.log(wrapper.props().children[0].props.children)
 //console.log(wrapper.props())