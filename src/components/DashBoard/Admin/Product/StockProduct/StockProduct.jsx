import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import handlerFieldStock from './handlerFieldStock'
import styles from './StockProduct.module.css'
import Label from '../Components/Label/Label'
import Colors from '../Components/Filters/Colors/Colors'
import { useDispatch, useSelector } from 'react-redux';
import { fetchColors, fetchSizes } from '../../../../../redux/filters';
import Sizes from '../Components/Filters/Sizes/Sizes';

const initInfoStock = [
    {
        quantity: '',
        size: '',
        color: {
            name: '',
            html: '',
        }
    }
]



const StockProduct = ({ initStock = {}, onChangeStockProduct, errors, sku = '', gender = '' }) => {
    const dispatch = useDispatch()
    const [stock, setStock] = useState(initInfoStock)
    const colors = useSelector(({ filters }) => filters.data.colors)
    const sizes = useSelector(({ filters }) => filters.data.sizes)
    console.log("🚀 ~ file: StockProduct.jsx:27 ~ StockProduct ~ sizes:", sizes)

    useEffect(() => {
        dispatch(fetchColors())
        dispatch(fetchSizes(gender))
    }, [dispatch])

    useEffect(() => {
        setStock(initStock)
    }, [initStock, errors])

    const handlerChangeColor = (color) => {

    }

    const handlerChangeSize = (color) => {

    }

    return (
        <div className={styles.StockContainer}>
            <div className={styles.ContainerHeader}>
                <div>
                    <Label title='SKU' text={sku} />
                    <Label title='GENDER' text={gender.toLocaleUpperCase()} />
                </div>
                <div>
                    <Colors colors={colors} onSelectColor={handlerChangeColor} />
                    <Sizes sizes={sizes} onSelectSize={handlerChangeSize} />
                </div>
            </div>
        </div>
    )
}

StockProduct.propTypes = {
    initStock: PropTypes.object,
    onChangeStockProduct: PropTypes.func,
    errors: PropTypes.object,
    sku: PropTypes.string,
    gender: PropTypes.string,
}

export default StockProduct