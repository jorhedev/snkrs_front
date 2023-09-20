import styles from "./Home.module.css";
import snkrs from '../../assets/Logo.png'


const Home = () =>{

    return(
        <div className={styles.container}>
        <img src={snkrs} alt="" />
        <p>loading...</p>
        </div>
    )
}

export default Home;