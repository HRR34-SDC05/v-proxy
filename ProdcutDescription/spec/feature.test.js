import React from "react"
import Enzyme, {shallow, mount} from "enzyme";
import Feature from '../client/src/components/Feature.jsx';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter()});

describe("Feature component", ()=>{
  it("renders?", () => {
    const wrapper = shallow(<Feature />);
    expect(wrapper.exists()).toBe(true);
  })
    it("does not break with an empty array ?", () => {
    const wrapper = shallow(<Feature features= {[]}/>);
    expect(wrapper.find("li")).toHaveLength(1);
  })
})

