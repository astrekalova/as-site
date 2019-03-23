import React from "react"
import { shallow, mount, render } from 'enzyme';

import ContactForm from "../src/components/ContactForm"

describe("ContactForm", () => {
  it("renders correctly", () => {
    const wrapper = mount(<ContactForm />)
    expect(wrapper.find('form')).toHaveLength(1);
  })
})