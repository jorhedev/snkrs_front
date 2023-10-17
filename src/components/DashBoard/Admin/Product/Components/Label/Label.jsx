import React from 'react'
import styles from './Label.module.css'
import PropTypes from 'prop-types';

const Label = ({ title, text }) => {


    return (
        <div className={styles.LabelContainer}>
            <span className={styles.Title}>
                {title}
            </span>
            <span className={styles.Text}>
                {text}
            </span>
        </div>
    )
}

Label.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Label;