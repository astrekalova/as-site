import React from 'react'
import styled from 'styled-components';
import { navigate } from 'gatsby-link'
import { grey, greyLighter, black, blue, white, red } from '../utils/color'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.email) {
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(() => {
          this.setState({ submitted: true });
          navigate(form.getAttribute('action'));
      })
    } else {
      this.setState({ emailWarning: true });
    }
  }

  render() {
    const missingEmailWarning = this.state.emailWarning 
      ? <label className="warning">Please, fill out the email</label> 
      : null;
    
    return this.state.submitted ? (
      <ThanksBlock>
        Thanks for submitting your information, I'll be in contact with you as
        soon as possible!
      </ThanksBlock>
    ) : (
      <Form>
        <form
          name="contact"
          method="post"
          action="/contact/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="contactBlock">
            <label htmlFor="name" className="contactLabel">
              Name
            </label>
            <input
              name="name"
              className="contactInput"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="contactBlock">
            <label htmlFor="email" className="contactLabel">
              Email
            </label>
            <label className="warning">
              {missingEmailWarning}
            </label>
            <input
              name="email"
              className="contactInput"
              type="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="contactBlock">
            <label htmlFor="message" className="contactLabel">
              Message
            </label>
            <textarea
              name="message"
              className="contactInput"
              onChange={this.handleChange}
            />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </Form>
    )
  }
}

const ThanksBlock = styled.p`
  margin-top: 2.5em;
`

const Form = styled.div`
  .contactBlock {
    margin-top: 2em;
  }

  .contactLabel {
    display: block;
    font-size: medium;
  }

  .contactInput {
    padding: 12px;
    margin: 6px 0 0 0;
    border: 1px solid ${grey};
    background: ${greyLighter};
    color: ${black};
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;
    width: 100%;
  }

  .warning {
    color: ${red};
  }

  .button {
    border: transparent solid 2px;
    background-color: ${blue};
    transition: ${blue} .1s linear;
    font-size: 16px;
    width: 150px;
    height: 3em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 2em;
    font-weight: 900;
    color: ${white};
}

  .button:hover {
      background-color: ${white};
      color: ${blue};
  }
`