import React from 'react'
import styles from './contact.module.css'


const Contact = ({name,number,onDeleteContact}) => (
    <div className={styles.contact__item}>
        <p className={styles.contact__text}>{name}:</p>
        <p className={styles.contact__text}>{number}</p>
        <button className={styles.button__contact} type="button" onClick={onDeleteContact}>Delete</button>
    </div>
);

export default Contact;