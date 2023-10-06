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
      name: "Nike",
      price: 75.99,
      type: "DUNK LOW",
      image: "https://letkicks.com/cdn/shop/files/e901bb78-d69a-46e5-8580-19170e2ad385.webp?v=1691277183",
      color: [],
      category: "ACCESSORIES",
      size: "4",
    },
    {
      id: 2,
      name: "Adidas",
      price: 199.99,
      type: "Forum",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69c14e2f1e034983a4ecaf5600fe20ea_9366/Tenis_Forum_Bold_x_Andre_Saraiva_Blanco_HQ6863_01_standard.jpg",
      color: [],
      category: "CLOTHES",
      size: "6",
      
    },
    {
      id: 3,
      name: "Nike",
      price: 199.99,
      type: "Air Max",
      image:
        "https://www.kicks.com.co/media/catalog/product/d/m/dm0028-002-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
      color: [],
      size: "4",
      category:""
    },
    {
      id: 4,
      name: "Adidas",
      price: 199.99,
      type: "Response Runner",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/32c151dc88224a6f93b1af1200ec5a6a_9366/Tenis_Response_Runner_Negro_ID7336_01_standard.jpg",
      color: [],
      size: "8",
      category:""
    },
    {
      id: 5,
      name: "Puma",
      price: 199.99,
      type: "X-RAY Game",
      image:
        "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/4ce41876-214c-47e2-962a-6ab44f8b69b5.93208cfef1af3141e2e0e16990a16852.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
      color: [],
      size: "6",
      category:""
    },
    {
      id: 6,
      name: "VANS",
      price: 199.99,
      type: "UltraRange",
      image:
        "https://tafmx.vtexassets.com/arquivos/ids/170081/VN0A3MVUY28-2.jpg.png?v=637293864554700000",
      color: [],
      size: "12",
      category:""
    },
    {
      id: 7,
      name: "Puma",
      price: 199.99,
      type: "Sleptream",
      image:
        "https://cdn.baguer.co/uploads/2023/06/tenis-puma-sliptream-invdr-blanco-122445BL.jpg_4HUF8OKxw0T3W3NPUcoE0I0027zGlW6aEYqbghDcJMzfVay07m.jpg",
      color: [],
      size: "9",
      category:""
    },
    {
      id: 8,
      name: "le coq sportif",
      price: 199.99,
      type: "Omega Sport",
      image:
        "https://falabella.scene7.com/is/image/FalabellaCO/gsc_124013307_3704955_1?wid=800&hei=800&qlt=70",
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