import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import TopSales from "../../components/TopSales/TopSales";
import Newsletter from "../../components/Newsletter/Newsletter";


const Home = () =>{

    return(
        <div className={styles.container}>
            <Navbar/>
            <Header/>
            <Promo/>
            <TopSales/>
            <Newsletter/>
                <p>loading...</p>
        </div>
    )
}

export default Home;