import React, { useRef } from 'react';
import bannerData from '../../assets/Info.json';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {IoMdStar, IoMdStarOutline } from 'react-icons/io';

import styles from './InfoUser.module.css';

const InfoUser = () => {
  const slideTrackRef = useRef(null);

  const scrollLeft = () => {
    slideTrackRef.current.scrollLeft -= 200; // Ajusta la cantidad de desplazamiento según tu diseño
  };

  const scrollRight = () => {
    slideTrackRef.current.scrollLeft += 200; // Ajusta la cantidad de desplazamiento según tu diseño
  };

  return (
    <div className={styles.slider}>
      <h1>Customers Reviews</h1>
     
      <button className={`${styles.sliderArrow} ${styles.leftArrow}`} onClick={scrollLeft}>
        <MdKeyboardArrowLeft/>
      </button>

      <div className={styles.slideTrack} ref={slideTrackRef}>
        {bannerData.comentarios.map((infoItem) => (
          <div className={styles.slide} key={infoItem.id}>
            <div className={styles.colorCircle}></div>
            <img
              src={infoItem.img}
              alt={`Banner ${infoItem.id}`}
              className={styles.bannerImage}
            />
            <div className={styles.comment}>
              <h3>{infoItem.usuario}</h3>
              <div className={styles.stars}>{infoItem.calificacion}</div>
              <p>{infoItem.comentario}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.sliderArrow} ${styles.rightArrow}`} onClick={scrollRight}>
        <MdKeyboardArrowRight/>
      </button>
    </div>
  );
};

export default InfoUser;



// import React, { useRef, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getReviewsByUser } from './reviewSlice'; // Asegúrate de importar correctamente el módulo donde se encuentra reviewSlice.
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
// import styles from './InfoUser.module.css';

// const InfoUser = () => {
//   const slideTrackRef = useRef(null);
//   const dispatch = useDispatch(); // Obtén la función dispatch.

//   // Utiliza useSelector para obtener el estado de Redux.
//   const reviews = useSelector((state) => state.reviews.reviews);
//   const error = useSelector((state) => state.reviews.error);

//   const userId = 'usuario_id'; // Reemplaza 'usuario_id' con el ID de usuario apropiado.

//   useEffect(() => {
//     // Llama a la acción getReviewsByUser cuando sea necesario, por ejemplo, en un useEffect para cargar las revisiones del usuario.
//     dispatch(getReviewsByUser(userId)); // Reemplaza 'userId' con el ID de usuario apropiado.
//   }, [dispatch, userId]);

//   const scrollLeft = () => {
//     slideTrackRef.current.scrollLeft -= 200; // Ajusta la cantidad de desplazamiento según tu diseño.
//   };

//   const scrollRight = () => {
//     slideTrackRef.current.scrollLeft += 200; // Ajusta la cantidad de desplazamiento según tu diseño.
//   };

//   if (error) {
//     return (
//       <div className={styles.error}>
//         Error al cargar las revisiones: {error}
//       </div>
//     );
//   }

//   return (
//     <div className={styles.slider}>
//       <button className={`${styles.sliderArrow} ${styles.leftArrow}`} onClick={scrollLeft}>
//         <MdKeyboardArrowLeft />
//       </button>
//       <h1>Customers Reviews</h1>
//       <div className={styles.slideTrack} ref={slideTrackRef}>
//         {reviews.map((infoItem) => (
//           <div className={styles.slide} key={infoItem.id}>
//             <div className={styles.colorCircle}></div>
//             <img
//               src={infoItem.img}
//               alt={`Banner ${infoItem.id}`}
//               className={styles.bannerImage}
//             />
//             <div className={styles.comment}>
//               <h3>{infoItem.usuario}</h3>
//               <div className={styles.stars}>{infoItem.calificacion}</div>
//               <p>{infoItem.comentario}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className={`${styles.sliderArrow} ${styles.rightArrow}`} onClick={scrollRight}>
//         <MdKeyboardArrowRight />
//       </button>
//     </div>
//   );
// };

// export default InfoUser;
