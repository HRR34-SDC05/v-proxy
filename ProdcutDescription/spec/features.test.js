import React from "react"
import Enzyme, {shallow, mount} from "enzyme";
import Features from '../client/src/components/Features.jsx';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter()});

describe("Features component", ()=>{
  it("renders?", () => {
    const wrapper = shallow(<Features />);
    expect(wrapper.exists()).toBe(true);
  })
  it("does not break with an empty array ?", () => {
    const wrapper = shallow(<Features features= {[]}/>);
    expect(wrapper.find("div")).toHaveLength(2);
  })
})

