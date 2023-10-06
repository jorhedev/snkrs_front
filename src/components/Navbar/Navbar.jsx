import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import snkrs from '../../assets/Logo.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { LogIn } from '../Login';
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setViewLogin } from "../../redux/user";
import { NAVBAR_LINKS, ICONS } from "../../const";
import Logo from "../Icons/Logo";

const { WOMEN, MEN, KIDS, FAVORITE, TROLLEY, LOGIN } = NAVBAR_LINKS
const Navbar = ({ NavColor = '#ffffff', LogoColor = 'black' }) => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    if (!isNavbarVisible) dispatch(setViewLogin(false))

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
    return (
        <div className={`${styles.container} ${isNavbarVisible ? styles.visible : ''}`} style={{ backgroundColor: `${NavColor}` }}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <Link to='/'><Logo width={'200px'} height={'60px'} fill={LogoColor} /></Link>
                </div>
                <div className={styles.NavbarLinks}>
                    {WOMEN.includes(pathname) ? <Link to='/cardw'><h2>WOMEN</h2></Link> : null}
                    {MEN.includes(pathname) ? <Link to='/card'><h2>MEN</h2></Link> : null}
                    {KIDS.includes(pathname) ? <Link to='/cardK'><h2>KIDS</h2></Link> : null}
                    {KIDS.includes(pathname) ? <input type="text" name="" id="" placeholder="search" /> : null}
                    {FAVORITE.includes(pathname) ? <Link to="/user/favorites"> <h3 title='favorites'>{ICONS.WHITE_FAVORITE}</h3></Link> : null}
                    {TROLLEY.includes(pathname) ? <h3>
                        {" "}
                        <Link to="/user?view=shopping">
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