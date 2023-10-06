import React from 'react'
import styles from './Trolley.module.css'
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart'

const Trolley = () => {
    return (
        <div className={styles.TrolleyContainer}>
            <ShoppingCart />
        </div>
    )
}

export default Trolley