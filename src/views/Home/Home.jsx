import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import Newsletter from "../../components/Newsletter/Newsletter";
import BeMember from '../../components/BeMember/BeMember'
import Footer from '../../components/Footer/Footer'
import BrandCarrusel from "../../components/BrandCarrusel/BrandCarrusel";
import NavHome from "../../components/NavHome/NavHome";

const Home = () =>{

    return(
        <div className={styles.container}>
            <NavHome/>
            <Header/>
            <Promo/>
            <BrandCarrusel/>
            <BeMember/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home;