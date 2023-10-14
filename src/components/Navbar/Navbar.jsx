import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { LogIn } from '../Login';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setViewLogin } from "../../redux/auth";
import { NAVBAR_LINKS, ICONS, MENU_USER, SESSION_NOT_COOKIE, DETAIL_PAGE } from "../../const";
import Logo from "../Icons/Logo";
import { readCookieSession } from "../../services";
import { NotLogin } from "../Alerts";

const { HOME, WOMEN, MEN, KIDS, FAVORITE, TROLLEY, SEARCH, LOGIN } = NAVBAR_LINKS
const Navbar = ({ NavColor = '#ffffff', LogoColor = 'black' }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { pathname } = useLocation()
    const [role, setRole] = useState('')
    const login = useSelector(({ auth }) => auth.status)
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    if (!isNavbarVisible) dispatch(setViewLogin(false))
    const cookie = readCookieSession();

    useEffect(() => {
        if (cookie) {
            const { role } = cookie;
            setRole(role);
        } else {
            setRole('');
        }
    }, [cookie, login]);

    useEffect(() => {
        let prevScrollPos = window.scrollY;
        const handlerScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setIsNavbarVisible(!isScrollingDown);
            prevScrollPos = currentScrollPos;
        };
        window.addEventListener('scroll', handlerScroll);
        return () => {
            window.removeEventListener('scroll', handlerScroll);
        };
    }, [dispatch]);

    const handlerChangeFavorite = () => {
        if (!cookie) {
            return NotLogin()
        }
    }

    return (
        <div className={`${styles.container} ${isNavbarVisible ? styles.visible : ''}`} style={{ backgroundColor: `${NavColor}` }}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <Link to={'/home'}><Logo width={'200px'} height={'60px'} fill={LogoColor} /></Link>
                </div>
                <div className={styles.NavbarLinks}>
                    {WOMEN.includes(pathname) ? <Link to='/women'><h2>WOMEN</h2></Link> : null}
                    {MEN.includes(pathname) ? <Link to='/men'><h2>MEN</h2></Link> : null}
                    {KIDS.includes(pathname) ? <Link to='/kids'><h2>KIDS</h2></Link> : null}
                    {KIDS.includes(pathname) ? "" : null}
                    {role != 'admin' ? FAVORITE.includes(pathname) ?

                        <Link to={role == 'user' ? MENU_USER.favorites.route || DETAIL_PAGE(pathname) : null}>
                            <h3 title='favorites' onClick={handlerChangeFavorite}>{ICONS.FAVORITE('black')}</h3></Link> :
                        null : null}
                    {(role != 'admin' && (TROLLEY.includes(pathname) || DETAIL_PAGE(pathname))) ?
                        <h3>
                            {" "}
                            <Link to={role == "user" ? MENU_USER.shopping.route : "/trolley"}>
              <h3 title='shopping cart'>
              {ICONS.TROLLEY ("black")} 
              <span className={styles.cartCounter}> {cartItems.length} </span>
            </h3>
              </Link>
                        </h3>
                        : null}
                    {LOGIN.includes(pathname) || DETAIL_PAGE(pathname) ? <LogIn /> : null}
                </div>
            </div>
            <div className={`${styles.BackHome} ${styles.NavbarLinks}`}>
                {HOME.includes(pathname) || DETAIL_PAGE(pathname) ?
                    <Link to={SESSION_NOT_COOKIE}><h2>{ICONS.ARROW_LEFT('black')}BACK TO HOME</h2></Link>
                    : null}
            </div>
        </div >
    )
}

Navbar.propTypes = {
    NavColor: PropTypes.string,
    LogoColor: PropTypes.string,
}

export default Navbar;