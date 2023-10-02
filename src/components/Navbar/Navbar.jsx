import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import snkrs from '../../assets/Logo.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { LogIn } from '../Login';

const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                <Link to='/'><img src={snkrs} alt="" /></Link>                
                </div>
                <div className={styles.buttons}>
                    <Link to='/cardw'><h2>WOMEN</h2></Link>
                    <Link to='/card'><h2>MEN</h2></Link>
                    <Link to='/cardK'><h2>KIDS</h2></Link>
                    <input type="text" name="" id="" placeholder="BUSCAR" />
                   <Link to="/user?view=favorites"> <h3><AiOutlineHeart /></h3></Link>
                    <h3>
            {" "}
            <Link to="/user?view=shopping">
              {" "}
              <BsCart2 />{" "}
            </Link>
          </h3>
                    <LogIn />
                </div>
            </div>
        </div>
    )
}

export default Navbar;