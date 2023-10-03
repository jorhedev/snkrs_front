import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import TopSales from "../../components/TopSales/TopSales";
import Newsletter from "../../components/Newsletter/Newsletter";
import BeMember from '../../components/BeMember/BeMember'
import Footer from '../../components/Footer/Footer'

const Home = () =>{

    return(
        <div className={styles.container}>
            <Header/>
            <Promo/>
            
            <TopSales/>
            <BeMember/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home;