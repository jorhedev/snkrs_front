import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../../Navbar/Navbar'
import LateralMenu from '../../LateralMenu/LateralMenu'

const Statistics = props => {
    return (
        <>
            <Navbar NavColor='#F7F7F7' LogoColor='#424242' />
            <LateralMenu />
        </>
    )
}

Statistics.propTypes = {}

export default Statistics