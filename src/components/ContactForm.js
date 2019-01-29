import React from 'react'
import styles from './ContactForm.module.css'
import { navigate } from 'gatsby-link'

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
  }

  render() {
    return this.state.submitted ? (
      <p className={styles.thanks}>
        Thanks for submitting your information, I'll be in contact with you as
        soon as possible!
      </p>
    ) : (
      <div>
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
          <div className={styles.contactBlock}>
            <label htmlFor="name" className={styles.contactLabel}>
              Name
            </label>
            <input
              name="name"
              className={styles.contactInput}
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.contactBlock}>
            <label htmlFor="email" className={styles.contactLabel}>
              Email
            </label>
            <input
              name="email"
              className={styles.contactInput}
              type="email"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.contactBlock}>
            <label htmlFor="message" className={styles.contactLabel}>
              Message
            </label>
            <textarea
              name="message"
              className={styles.contactInput}
              onChange={this.handleChange}
            />
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
