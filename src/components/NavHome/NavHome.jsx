import styles from "./NavHome.module.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

BsArrowRight
const NavHome = () => {

    return (
        <div className={styles.banner}>
            <Link className={styles.btn} to={"/home"}>see our store <BsArrowRight/></Link>
        </div >
    )
}


export default NavHome;