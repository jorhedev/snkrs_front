import React from 'react'
import styles from './LateralMenu.module.css';
import { MENU_USER, MENU_ADMIN } from '../../../const';
import { Link, useLocation } from 'react-router-dom';


const LateralMenu = () => {
    const { pathname } = useLocation()

    let menu
    if (pathname.includes('/admin')) {
        menu = MENU_ADMIN
    } else if (pathname.includes('/user')) {
        menu = MENU_USER
    } else {
        return
    }
    return (
        <>
            <div className={styles.LateralMenuContainer}>
                <div className={styles.LateralMenu}>
                    {
                        Object.values(menu).map(({ name, route, icon }, index) => {
                            return (
                                <Link to={route} key={index}>
                                    <div className={`${styles.MenuLink} ${route === pathname ? styles.MenuActive : null}`} key={index}>
                                        <div className={styles.MenuInfo}>
                                            {icon}
                                            <label>{name}</label>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default LateralMenu