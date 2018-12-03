import React from 'react'
import styles from "./ContactForm.module.css"

export default () => (<form
    name="contact-form"
    method="post"
    netlify
    >
    <div className={styles.contactBlock}>
        <label htmlFor="name" className={styles.contactLabel}>Name</label>
        <input name="name" className={styles.contactInput} type="text" />
    </div>
    <div className={styles.contactBlock}>
        <label htmlFor="email" className={styles.contactLabel}>Email</label>
        <input name="email" className={styles.contactInput} type="email" />
    </div>
    <div className={styles.contactBlock}>
        <label htmlFor="message" className={styles.contactLabel}>Message</label>
        <textarea name="message" className={styles.contactInput}/>
    </div>
    <button className={styles.button} type="submit">Submit</button>
</form>)