import React from 'react'
import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    )
}

Card.propTypes = {

}

export default Card

