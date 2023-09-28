import styles from "./Promo.module.css";
import marca from "../../assets/Image/image3.png";

const Promo = () => {
  const zapatillasData = [
    {
      id: 1,
      name: "Yeezy",
      price: 75.99,
      type: "SPLV-350",
      image:
        "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
      color: [],
      category: "ACCESSORIES",
      size: "4",
    },
    {
      id: 2,
      name: "Yeezy",
      price: 199.99,
      type: "SPLV-350",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
      color: [],
      category: "CLOTHES",
      size: "6",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.promo}>
        <div className={styles.promoInfo}>
          <div className={styles.marca}>
            <img src={marca} alt="" />
          </div>
          <div className={styles.cardsPromo}>

          <div className={styles.cardPromo}>
              <div className={styles.cardPromoImage}>
                <img
                  src={zapatillasData[1].image}
                  alt={zapatillasData[1].name}
                />
              </div>
              <div className={styles.cardPromoInfo}>
                <div>
                  <h2>{zapatillasData[1].name}</h2>
                  <p>{zapatillasData[1].type}</p>
                </div>
                <div>
                  <h3>$ {zapatillasData[1].price}</h3>
                </div>
              </div>
            </div>

            <div className={styles.cardPromo}>
              <div className={styles.cardPromoImage}>
                <img
                  src={zapatillasData[0].image}
                  alt={zapatillasData[0].name}
                />
              </div>
              <div className={styles.cardPromoInfo}>
                <div>
                  <h2>{zapatillasData[0].name}</h2>
                  <p>{zapatillasData[0].type}</p>
                </div>
                <div>
                  <h3>$ {zapatillasData[0].price}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Promo;
