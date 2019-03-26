import React from "react"
import { shallow, mount, render } from 'enzyme';
import styles from './ContactForm.module.css'

import ContactForm from "../src/components/ContactForm"

describe("ContactForm", () => {
  it("renders form correctly", () => {
    const wrapper = mount(<ContactForm />)
    expect(wrapper.find('form')).toHaveLength(1);
  })
})