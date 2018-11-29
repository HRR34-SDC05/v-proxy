import React from "react";
import { mount } from "enzyme";

describe("Jest and Enzyme tests should be working", () => {
  test("Make sure Jest is working", () => {
    expect(true).toBe(true);
  });

  test("Make sure Enzyme method mount is working", () => {
    const divTest = <div>hello</div>;
    const answer = mount(divTest);
    expect(answer.text()).toBe("hello");
  });
});
