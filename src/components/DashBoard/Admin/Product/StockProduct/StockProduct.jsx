import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import handlerFieldStock from './handlerFieldStock'
import styles from './StockProduct.module.css'
import Label from '../Components/Label/Label'
import Colors from '../Components/Filters/Colors/Colors'
import { useDispatch, useSelector } from 'react-redux';
import { fetchColors, fetchSizes } from '../../../../../redux/filters';
import Sizes from '../Components/Filters/Sizes/Sizes';
import handlerFilterStock from './handlerFilterStock';

const initInfoStock = []

const StockProduct = ({ initStock, onChangeStockProduct, errors, model = '', gender = '' }) => {
    const dispatch = useDispatch()
    const [stock, setStock] = useState(initInfoStock)
    const colors = useSelector(({ filters }) => filters.data.colors)
    const sizes = useSelector(({ filters }) => filters.data.sizes)
    const [filter, setFilter] = useState({ color: '', size: '' })
    console.log("🚀 ~ file: StockProduct.jsx:21 ~ StockProduct ~ filter:", filter)
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        setStock(initStock)
    }, [initStock, errors])

    useEffect(() => {
        dispatch(fetchColors())
        dispatch(fetchSizes(gender))
    }, [dispatch])

    useEffect(() => {
        setStock(handlerFieldStock(colors, sizes))
    }, [dispatch, colors, sizes])

    useEffect(() => {
        setFiltered(handlerFilterStock(filter, stock))
    }, [filter, stock])


    const handlerChangeColor = (data) => {
        if (data === filter.color) {
            setFilter({ ...filter, color: '' })
        } else {
            setFilter({ ...filter, color: data })
        }
    }

    const handlerChangeSize = (data) => {
        if (data === filter.size) {
            setFilter({ ...filter, size: '' })
        } else {
            setFilter({ ...filter, size: data })
        }
    }
    const handlerChangeQuantity = (event, index) => {
        // event.preventDefaul()
        // const [name, value] = event.target
        // setStock([...stock, [index]['quantity']: value])

    }

    return (
        <div className={styles.StockContainer}>
            <div className={styles.ContainerHeader}>
                <div className={styles.ProductModel}>
                    <Label title='MODEL' text={model.toUpperCase()} />
                </div>
                <div className={styles.ProductFilters}>
                    <Label title='GENDER' text={gender.toUpperCase()} />
                    <Colors colors={colors} onSelectColor={handlerChangeColor} />
                    <Sizes sizes={sizes} onSelectSize={handlerChangeSize} />
                </div>
                <div className={styles.DataStock}>
                    {stock.length && stock?.map(({ color, size, quantity }, index) => {
                        return (
                            filtered && filtered.includes(index) &&
                            <div className={styles.InfoStock} key={index}>
                                <div>
                                    <div>
                                        {size} {color.name}
                                    </div>
                                </div>
                                <input type="text"
                                    onChange={(event) => handlerChangeQuantity(event, index)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

StockProduct.propTypes = {
    initStock: PropTypes.object,
    onChangeStockProduct: PropTypes.func,
    errors: PropTypes.object,
    model: PropTypes.string,
    gender: PropTypes.string,
}

export default StockProduct