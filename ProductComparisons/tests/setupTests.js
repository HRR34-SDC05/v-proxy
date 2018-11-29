// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const textContent = node => {
  try {
    // enzyme sometimes blows up on text()
    return node.text();
  } catch (_e) {
    return "";
  }
};

export const findByText = (text, wrapper, options = {}) => {
  const comparator = options.exact
    ? x => textContent(x) === text
    : x => new RegExp(text).test(textContent(x));
  return wrapper.findWhere(comparator).last();
};
