import React from "react"
import Enzyme, {shallow, mount} from "enzyme";
import TechSpecs from '../client/src/components/TechSpecs.jsx';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter()});

describe("TechSpecs component", ()=>{
  it("renders?", () => {
    const wrapper = shallow(<TechSpecs/>);
    expect(wrapper.exists()).toBe(true);
  })
  it("does not break with an empty array ?", () => {
    const wrapper = shallow(<TechSpecs techSpecs= {[]}/>);
    expect(wrapper.find("div")).toHaveLength(2);
  })
})