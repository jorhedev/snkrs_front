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
    image: "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
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
      "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
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
      "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
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
      "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
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
  {
    id: 9,
    name: "Yeezy",
    price: 85.99,
    type: "SPLV-350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    size: "4",
    category:""
    
  },
  {
    id: 10,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png",
    color: [],
    size: "5",
    category:""
  },
  {
    id: 11,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-Pic.png",
    color: [],
    size: "11",
    category:""
  },
  {
    id: 12,
    name: "Yeezy",
    price: 80.99,
    type: "SPLV-350",
    image: "https://m.media-amazon.com/images/I/41FTGLmnvsL._AC_SY1000_.jpg",
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
      "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
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
      "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
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
      "https://p.kindpng.com/picc/s/124-1243472_yeezy-v2-beluga-png-transparent-png.png",
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
