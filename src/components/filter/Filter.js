import React from 'react'
import styles from './filter.module.css'


const Filter = ({value, onFilterContact}) => (
    <label className={styles.filter__label}>
        Find contacts by name
        <input className={styles.filter__input} type="text" value={value} onChange={onFilterContact}/>
    </label>
);

export default Filter;