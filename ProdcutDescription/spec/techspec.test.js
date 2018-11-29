import React from "react"
import Enzyme, {shallow, mount} from "enzyme";
import TechSpec from '../client/src/components/TechSpec.jsx';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter()});

const mockData =
  {
    types:"Something",
    description:"Else"
  }
//   {
//     types:"More",
//     description:"And More"
//   }
// ];

describe("TechSpec component", ()=>{
  it("renders?", () => {
    const wrapper = shallow(<TechSpec />);
    expect(wrapper.exists()).toBe(true);
  })
    it("does not break with an empty array ?", () => {
    const wrapper = shallow(<TechSpec techSpecs= {[]}/>);
    console.log(wrapper.find("li").length)
    expect(wrapper.find("li")).toHaveLength(1);
  })
  it("does not break with a single entry", () => {
    const wrapper = shallow(<TechSpec techSpec= {mockData}/>);
    console.log(wrapper.find("li").length)
    expect(wrapper.find("li")).toHaveLength(1);
  })
})


