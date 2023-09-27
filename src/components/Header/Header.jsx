import styles from "./Header.module.css";
import nikeAir from "../../assets/Image/nikeairProm.jpg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>NEW NIKE AIR</h1>
        <h2>ORDER NOW</h2>
      </div>
      <div className={styles.slide}>
        <img src={nikeAir} alt="" />
      </div>
    </div>
  );
};

export default Header;
