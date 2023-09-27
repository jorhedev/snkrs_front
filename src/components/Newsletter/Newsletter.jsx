import styles from "./Newsletter.module.css";
import { HiOutlineMail } from 'react-icons/hi';


const Newsletter = () => {

    return(
        <div className={styles.containerEmail}>
            <div className={styles.infoEmail}>
            <h4><HiOutlineMail/></h4>
            <h1>SUSCRIBE TO NEWSLETTER</h1>
            <h2>for more information</h2>
            <div className={styles.send}>
                <input type="text" name="" id="" />
                <button>SEND</button>
            </div>
            </div>
        </div>
    )
}

export default Newsletter;