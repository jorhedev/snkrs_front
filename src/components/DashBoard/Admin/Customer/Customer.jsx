import React, { useEffect, useState } from 'react'
import styleDashBoard from '../../DashBoard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUser } from '../../../../redux/user'
import styles from "./Customer.module.css";
import { ICONS, MENU_ADMIN } from '../../../../const'
import { ModalDataDelete } from '../../../Alerts'

const Customer = () => {
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState({ 0: { edit: false, trash: false }, add: false })
    const users = useSelector(({ user }) => user.user)
    console.log(users);

    useEffect (()=>{
        dispatch(fetchAllUser())
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
                <label className={styles.TitleTable}><h1>{MENU_ADMIN.customer.icon}</h1>USERS...</label>
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
                                            FIRSTNAME
                                        </div>
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            LASTNAME  </div>
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            EMAIL  </div>
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            COUNTRY  </div>
                                    </span>
                                </th>
                                <th>
                                    <span className={styles.ItemTable}>
                                        <div className={styles.BorderTable}>
                                            STATUS  </div>
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
                            {!!users.length && users?.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.ImageContainer}>
                                                    <img className={styles.Image} src={user?.image} alt={user?.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>{user?.firstName?.toUpperCase()}</div>
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>{user?.lastName?.toUpperCase()}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>
                                                    <a className={styles.Email} href={`mailto:${user?.email}`}>{user?.email}</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>{user?.address[0]?.country?.toUpperCase()}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.ItemTable}>
                                                <div className={styles.BorderTable}>{user?.status?.toUpperCase()}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handlerUpdateBrand(user?._id)}
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

Customer.propTypes = {}

export default Customer