/** @format */

// ZapatillasCard.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ZapatillaCard from "./ZapatillaCardK";
import Filter from "../Filter/Filter";
import styles from "./ZapatillaCard.module.css";

const zapatillasData = [
  {
    id: 1,
    name: "Yeezy",
    price: 75.99,
    type: "SPLV-350",
    image:"https://nikearprod.vtexassets.com/arquivos/ids/327546/BQ5453_100_A_PREM.jpg?v=638134641766230000",
    color: [],
    category: "ACCESSORIES",
    size: "4",
  },
  {
    id: 2,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/702759-800-800?v=638233932189700000&width=800&height=800&aspect=true",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/422824-800-800?v=638143981993030000&width=800&height=800&aspect=true",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/454003-800-800?v=638149303002200000&width=800&height=800&aspect=true",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/532376-1000-1000?v=638161392329830000&width=1000&height=1000&aspect=true",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/973c4112618d4dd18fb8af0601812da8_9366/EQ21_RUN_2.0_EL_K_Blanco_HR1841_06_standard.jpg",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b5036b9a59c49548971aeba00fe2064_9366/FortaRun_K_Naranja_GV9465_06_standard.jpg",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b6958c31b4a429f8961af4101069b7d_9366/Zapatillas_Superstar_Blanco_HQ4285_06_standard.jpg",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/596e06070a814625a270ae9900bd0bc5_9366/Zapatillas_Racer_TR21_Rosa_GW7147_06_standard.jpg",
    color: [],
    size: "4",
    category:""
    
  },
  {
    id: 10,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bae63f2ecb2c4d08ad77aed7018182a6_9366/ACTIVERIDE_2.0_C_Azul_HP6037_06_standard.jpg",
    color: [],
    size: "5",
    category:""
  },
  {
    id: 11,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/440394-1000-1000?v=638145717136700000&width=1000&height=1000&aspect=true",
    color: [],
    size: "11",
    category:""
  },
  {
    id: 12,
    name: "Yeezy",
    price: 80.99,
    type: "SPLV-350",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/532385-1000-1000?v=1782224961&width=1000&height=1000&aspect=true",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e80f70f0979d427da8acaedf00ac6350_9366/Botines_Predator_Precision.3_Terreno_Firme_Blanco_ID6792_06_standard.jpg",
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
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/394144/05/sv01/fnd/ARG/fmt/png",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/57f5959e2c364cdab91b634a12d103bf_9366/Botines_X_Crazyfast_Messi.4_Multiterreno_Plateado_IE4071_06_standard.jpg",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/630143-800-800?v=638210608343400000&width=800&height=800&aspect=true",
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
      "https://nikearprod.vtexassets.com/arquivos/ids/643521-1000-1000?v=1782273941&width=1000&height=1000&aspect=true",
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
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f27aa4c8f0374ca8861bae8b010f915f_9366/Zapatillas_Advantage_adidas_Court_Blanco_GY6995_06_standard.jpg",
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
