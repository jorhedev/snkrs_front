import styles from "./Navbar.module.css";
import snkrs from '../../assets/Logo.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPerson, BsCart2 } from 'react-icons/bs';



const Navbar = () => {

    return(
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                <img src={snkrs} alt="" />
                </div>
                <div className={styles.buttons}>
                <h2>WOMEN</h2>
                <h2>MEN</h2>
                <input type="text" name="" id="" placeholder="BUSCAR"/>
                <h3><AiOutlineHeart/></h3>
                <h3><BsCart2/></h3>
                <h3><BsPerson/></h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar;