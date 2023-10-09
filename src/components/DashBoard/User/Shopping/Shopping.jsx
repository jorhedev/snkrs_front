import React from 'react'
import DashBoard from '../../DashBoard.module.css'
import ShoppingCart from '../../../ShoppingCart/ShoppingCart'

const Shopping = () => {
    return (
        <div className={DashBoard.DashBoardContainer}>
            <ShoppingCart />
        </div>
    )
}

export default Shopping