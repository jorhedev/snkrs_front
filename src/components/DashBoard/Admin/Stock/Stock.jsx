import React, { useEffect, useState } from 'react'
import styleDashBoard from '../../DashBoard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../../redux/products'
import styles from "./Stock.module.css";
import { ICONS, MENU_ADMIN } from '../../../../const'
import { ModalDataDelete } from '../../../Alerts'

const Stock = () => {
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState({ 0: { edit: false, trash: false }, add: false })
    const stocks = useSelector(({ products }) => {
        return products.products
    })
    console.log(stocks);

    useEffect (()=>{
        dispatch(fetchProducts())
    },[dispatch])

    
    const handlerAddBrand = () => {

    }

    const handlerUpdateBrand = (id) => {
        console.log(id)
    }

    const handlerDeleteBrand = (id) => {
        ModalDataDelete('Brand', id, '/brand')
    }

    const handlerMouseEnter = (index, button) => {
        if (index !== 'add') return setIsHovered({ ...isHovered, [index]: { [button]: true } });
        return setIsHovered({ ...isHovered, add: true });

    }
    const handlerMouseLeave = (index, button) => {
        if (index !== 'add') return setIsHovered({ ...isHovered, [index]: { [button]: false } });
        return setIsHovered({ ...isHovered, add: false });
    }

    return (
        <div className={styleDashBoard.DashBoardContainer}>
            <div className={styles.TableContainer}>
                <label className={styles.TitleTable}><h1>{MENU_ADMIN.stock.icon}</h1>STOCK...</label>
                <div className={styles.TableData}>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ color: '#f4f4f4' }}>
                                    IMAGE
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            MODEL
                                        </div>
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            BRAND  </div>
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            GENDER  </div>
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            PRICE  </div>
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            STOCK  </div>
                                    </span>
                                </th>
                                <th> <button
                                    onClick={handlerAddBrand}
                                    onMouseEnter={() => handlerMouseEnter('add', null)}
                                    onMouseLeave={() => handlerMouseLeave('add', null)}
                                ><h1>{ICONS.PLUS(isHovered.add ? '#4CAF50' : '#f4f4f4')}</h1></button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {!!stocks.length && stocks?.map((produ, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.ImageContainer}>
                                                    <img className={styles.Image} src={produ?.image} alt={produ?.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>{produ?.model?.toUpperCase()}</div>
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>{produ?.brand?.brand.toUpperCase()}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>{produ?.gender?.toUpperCase()}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>$ {produ?.price}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>{produ?.stock[0]?.quantity}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handlerUpdateBrand(produ?._id)}
                                                onMouseEnter={() => handlerMouseEnter(index, 'edit')}
                                                onMouseLeave={() => handlerMouseLeave(index, 'edit')}
                                            >
                                                <h2>{ICONS.EDIT(isHovered[index]?.edit ? '#4CAF50' : '#454444')}</h2>
                                            </button>
                                            {/* <button
                                                onClick={() => handlerDeleteBrand(user?._id)}
                                                onMouseEnter={() => handlerMouseEnter(index, 'trash')}
                                                onMouseLeave={() => handlerMouseLeave(index, 'trash')}
                                            >
                                                <h2>{ICONS.TRASH(isHovered[index]?.trash ? '#4CAF50' : '#454444')}</h2>
                                            </button> */}
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                    </div>
                {/* ))} */}
            </div>
        </div>
    )
}


export default Stock