import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import styles from "./Home.module.css";

const Home = () => {


    const settings = {
        dots: true, // Muestra los indicadores (puntitos)
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Cantidad de tarjetas visibles a la vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: false,
        
    
      };
    
  return (
    <>
   
    
    <div className={styles.container}>

      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {saleData.map((d) => (
            <div className={styles.cardContainer} key={d.id}>
            <div className={styles.cardPromo} key={d.id}>
                <div className={styles.cardPromoImage}>
                <img
                  src={d.image}
                  alt={d.name}
                />
              </div>
              <div className={styles.cardPromoInfo}>
                <div>
                  <h2>{d.name}</h2>
                  <p>{d.type}</p>
                </div>
                <div>
                  <h3>$ {d.price}</h3>
                </div>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
    </>
  )
}

export default Home



const saleData = [
    {
      id: 1,
      name: "Yeezy",
      price: 75.99,
      type: "SPLV-350",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
      color: [],
      category: "ACCESSORIES",
      size: "4",
    },
    {
      id: 2,
      name: "Yeezy",
      price: 199.99,
      type: "SPLV-350",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
      color: [],
      category: "CLOTHES",
      size: "6",
      
    },
    {
      id: 3,
      name: "Yeezy",
      price: 199.99,
      type: "SPLV-350",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
      color: [],
      size: "4",
      category:""
    },
    {
      id: 4,
      name: "Yeezy",
      price: 199.99,
      type: "SPLV-350",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
      color: [],
      size: "8",
      category:""
    },
    {
      id: 5,
      name: "Yeezy",
      price: 199.99,
      type: "SPLV-350",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
      color: [],
      size: "6",
      category:""
    },
    {
      id: 6,
      name: "Yeezy",
      price: 199.99,
      type: "SPLV-350",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
      color: [],
      size: "12",
      category:""
    },
    {
      id: 7,
      name: "Yeezy",
      price: 199.99,
      type: "SPLV-350",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
      color: [],
      size: "9",
      category:""
    },
    {
      id: 8,
      name: "Yeezy",
      price: 199.99,
      type: "SPLV-350",
      image:
        "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
      color: [],
      size: "5.5",
      category:""
    },
    // {
    //   id: 9,
    //   name: "Yeezy",
    //   price: 85.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    //   color: [],
    //   size: "4",
    //   category:""
      
    // },
    // {
    //   id: 10,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png",
    //   color: [],
    //   size: "5",
    //   category:""
    // },
    // {
    //   id: 11,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png",
    //   color: [],
    //   size: "11",
    //   category:""
    // },
    // {
    //   id: 12,
    //   name: "Yeezy",
    //   price: 80.99,
    //   type: "SPLV-350",
    //   image: "https://m.media-amazon.com/images/I/41FTGLmnvsL._AC_SY1000_.jpg",
    //   color: [],
    //   size: "4",
    //   category:""
    // },
    // {
    //   id: 13,
    //   name: "Yeezy",
    //   price: 75.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
    //   color: [],
    //   size: "6",
    //   category:""
    // },
    // {
    //   id: 14,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    //   color: [],
    //   size: "5",
    //   category:""
    // },
    // {
    //   id: 15,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    //   color: [],
    //   size: "4",
    //   category:""
    // },
    // {
    //   id: 16,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    //   color: [],
    //   size: "9",
    //   category:""
    // },
    // {
    //   id: 17,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
    //   color: [],
    //   size: "4",
    //   category:""
    // },
    // {
    //   id: 18,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
    //   color: [],
    //   size: "7",
    //   category:""
    // },
    // {
    //   id: 19,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
    //   color: [],
    //   size: "8",
    // },
    // {
    //   id: 20,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
    //   color: [],
    //   size: "4",
    //   category:""
    // },
    // {
    //   id: 21,
    //   name: "Yeezy",
    //   price: 85.99,
    //   type: "SPLV-350",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    //   color: [],
    //   size: "9",
    //   category:""
    // },
    // {
    //   id: 22,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png",
    //   color: [],
    //   size: "11",
    //   category:""
    // },
    // {
    //   id: 23,
    //   name: "Yeezy",
    //   price: 199.99,
    //   type: "SPLV-350",
    //   sortBy: "PRICE (LOWEST TO HIGHEST)",
    //   image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png",
    //   color: [],
    //   size: "8",
    //   category:""
    // },
    // {
    //   id: 24,
    //   name: "Yeezy",
    //   price: 80.99,
    //   type: "SPLV-350",
    //   image: "https://m.media-amazon.com/images/I/41FTGLmnvsL._AC_SY1000_.jpg",
    //   color: [],
    //   size: "4",
    //   category:""
    // },
  ];