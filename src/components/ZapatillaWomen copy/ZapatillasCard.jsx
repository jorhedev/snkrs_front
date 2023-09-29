/** @format */

// ZapatillasCard.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ZapatillaCard from "./ZapatillaCard";
import Filter from "../Filter/Filter";
import styles from "./ZapatillaCard.module.css";

const zapatillasData = [
  {
    id: 1,
    name: "Yeezy",
    price: 75.99,
    type: "SPLV-350",
    image:"https://nikearprod.vtexassets.com/arquivos/ids/702786/DJ9946_104_A_PREM.jpg?v=638233932904370000",
    color: [],
    category: "ACCESSORIES",
    size: "4",
  },
  {
    id: 2,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/440178/DV1031_030_A_PREM.jpg?v=638145713626570000",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/701117/DJ9942_600_A_PREM.jpg?v=638233823289930000",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/700162/DR0501_200_A_PREM.jpg?v=638229717891400000",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/699351/DM9922_104_A_PREM.jpg?v=638229667793970000",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/629173/FB9752_100_A_PREM.jpg?v=638210593939830000",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/702701/DC3729_002_A_PREM.jpg?v=638233930782030000",
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
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ffa1509ae4db4a199543af350136418f_9366/Zapatillas_Lite_Racer_3.0_Violeta_HP6102_06_standard.jpg",
    color: [],
    size: "5.5",
    category:""
  },
  {
    id: 9,
    name: "Yeezy",
    price: 85.99,
    type: "SPLV-350",
    image:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d69cfc1838a84c3f81a7af430112c296_9366/Zapatillas_Ultraboost_1.0_Rosa_HR0058_06_standard.jpg",
    color: [],
    size: "4",
    category:""
    
  },
  {
    id: 10,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e3594e9920a473eb6585fe3df964a03_9366/Zapatillas_Superstar_XLG_Blanco_IF9995_06_standard.jpg",
    color: [],
    size: "5",
    category:""
  },
  {
    id: 11,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/004f3d818cf64fecb77fae980151c603_9366/Zapatillas_Forum_84_Hi_Blanco_GX4516_06_standard.jpg",
    color: [],
    size: "11",
    category:""
  },
  {
    id: 12,
    name: "Yeezy",
    price: 80.99,
    type: "SPLV-350",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6064484020104fea9a6daed70180e9e0_9366/Zapatillas_OZWEEGO_Gris_GZ9675_06_standard.jpg",
    color: [],
    size: "4",
    category:""
  },
  {
    id: 13,
    name: "Yeezy",
    price: 75.99,
    type: "SPLV-350",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/017b0d888efb4c72a84bae9400e6df6d_9366/Zapatillas_NMD_V3_Negro_GX6935_06_standard.jpg",
    color: [],
    size: "6",
    category:""
  },
  {
    id: 14,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/392064/01/sv01/fnd/ARG/fmt/png",
    color: [],
    size: "5",
    category:""
  },
  {
    id: 15,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/393496/01/sv01/fnd/ARG/fmt/png",
    color: [],
    size: "4",
    category:""
  },
  {
    id: 16,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/388973/93/sv01/fnd/ARG/fmt/png",
    color: [],
    size: "9",
    category:""
  },
  {
    id: 17,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/106947/05/sv01/fnd/ARG/fmt/png",
    color: [],
    size: "4",
    category:""
  },
  {
    id: 18,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/377046/07/sv01/fnd/ARG/fmt/png",
    color: [],
    size: "7",
    category:""
  },
  {
    id: 19,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
    color: [],
    size: "8",
  },
  {
    id: 20,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
    color: [],
    size: "4",
    category:""
  },
  {
    id: 21,
    name: "Yeezy",
    price: 85.99,
    type: "SPLV-350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    size: "9",
    category:""
  },
  {
    id: 22,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png",
    color: [],
    size: "11",
    category:""
  },
  {
    id: 23,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    sortBy: "PRICE (LOWEST TO HIGHEST)",
    image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png",
    color: [],
    size: "8",
    category:""
  },
  {
    id: 24,
    name: "Yeezy",
    price: 80.99,
    type: "SPLV-350",
    image: "https://m.media-amazon.com/images/I/41FTGLmnvsL._AC_SY1000_.jpg",
    color: [],
    size: "4",
    category:""
  },
];

const ZapatillasCard = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 9; // Cantidad de elementos por página
  const zapatillas = useSelector((state) => state.zapatillas); // Asegúrate de que el slice se llame 'zapatillas'
  console.log(zapatillas);

  const totalPages = Math.ceil(zapatillasData.length / itemsPerPage);

  // Función para generar los números de página
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  return (
    <>
      <div className={styles.product}>
        <div className={styles.cards}>
          {zapatillasData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) 
            .map((zapatilla) => (
              <ZapatillaCard key={zapatilla.id} zapatilla={zapatilla} />
            ))}
        </div>

        
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${styles.buttonpag} ${
              currentPage === 1 ? "" : styles.active
            }`}
          >
            Back
          </button>
          {generatePageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`${styles.buttonpag} ${
                currentPage === pageNumber ? styles.active : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= zapatillasData.length}
            className={`${styles.buttonpag} ${
              currentPage * itemsPerPage >= zapatillasData.length
                ? ""
                : styles.active
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Filter/>
    </>
  );
};

export default ZapatillasCard;
