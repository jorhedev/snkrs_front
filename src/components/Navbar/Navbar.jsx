import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import snkrs from '../../assets/Logo.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { LogIn } from '../Login';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setViewLogin } from "../../redux/user";
import { NAVBAR_LINKS, ICONS, MENU_USER, SESSION_NOT_COOKIE } from "../../const";
import Logo from "../Icons/Logo";
import { readCookieSession } from "../../services";
import { NotLogin } from "../Alerts";

const { HOME, WOMEN, MEN, KIDS, FAVORITE, TROLLEY, LOGIN } = NAVBAR_LINKS
const Navbar = ({ NavColor = '#ffffff', LogoColor = 'black' }) => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    console.log("🚀 ~ file: Navbar.jsx:20 ~ Navbar ~ pathname:", pathname)
    const user = useSelector(({ user }) => { return user.user })
    const [role, setRole] = useState('')
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
    }, [cookie, role]);

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
                    <Link to={SESSION_NOT_COOKIE}><Logo width={'200px'} height={'60px'} fill={LogoColor} /></Link>
                </div>
                <div className={styles.NavbarLinks}>
                    {HOME.includes(pathname) ? <Link to={SESSION_NOT_COOKIE}><h2>{ICONS.ARROW_LEFT_BLACK}HOME</h2></Link> : null}
                    {WOMEN.includes(pathname) ? <Link to='/cardw'><h2>WOMEN</h2></Link> : null}
                    {MEN.includes(pathname) ? <Link to='/card'><h2>MEN</h2></Link> : null}
                    {KIDS.includes(pathname) ? <Link to='/cardK'><h2>KIDS</h2></Link> : null}
                    {KIDS.includes(pathname) ? <input className={styles.NavInput} type="text" name="" id="" placeholder="search" /> : null}
                    {role != 'admin' ? FAVORITE.includes(pathname) ?
                        <Link to={role == 'user' ? MENU_USER.favorites.route : null}>
                            <h3 title='favorites' onClick={handlerChangeFavorite}>{ICONS.FAVORITE_WHITE}</h3></Link> :
                        null : null}
                    {(role != 'admin' && TROLLEY.includes(pathname)) ? <h3>
                        {" "}
                        <Link to="/user/shopping">
                            {" "}
                            <h3 title='shopping cart'>{ICONS.TROLLEY}</h3>
                            {" "}
                        </Link>
                    </h3> : null}
                    {LOGIN.includes(pathname) ? <LogIn /> : null}
                </div>
            </div>
        </div >
    )
}

Navbar.propTypes = {
    NavColor: PropTypes.string,
    LogoColor: PropTypes.string,
}

export default Navbar;