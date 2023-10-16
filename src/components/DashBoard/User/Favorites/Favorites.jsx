/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, fetchFavorites, removeFavorites } from "../../../../redux/favorites";
import styles from "./Favorites.module.css";
import DashBoard from "../../DashBoard.module.css";
import zapa from "../../../../assets/Image/zapatillas.png";
import Swal from "sweetalert2"; // Importa SweetAlert2
import Cards from "../../../Cards/Cards";
import Paginated from "../../../Paginated/Paginated";

const Favorites = () => {
  const dispatch = useDispatch();
  const [pageFavorites, setPageFavorites] = useState(1)
  const storages = useSelector(({ favorites }) => favorites.storages);
  const favorites = useSelector(({ favorites }) => favorites.favorites);
  const paginated = useSelector(({ favorites }) => favorites.pages);
  console.log("🚀 ~ file: Favorites.jsx:18 ~ Favorites ~ paginated:", paginated)


  useEffect(() => {
    dispatch(fetchFavorites({ page: pageFavorites }))
  }, [dispatch, pageFavorites])

  useEffect(() => {
    dispatch(fetchFavorites({ page: pageFavorites }))
  }, [dispatch, favorites, pageFavorites]);

  const handlerChangePage = (page) => {
    setPageFavorites(page)
  }
  // const agregarFavorita = (item) => {
  //   dispatch(addFavorites(item));
  //   setFavoritas([...favoritas, item]);
  // };

  // const eliminarFavorita = (item) => {
  //   dispatch(removeFavorites(item));
  //   const updatedIsLiked = { ...isLiked };
  //   delete updatedIsLiked[item._id];
  //   setIsLiked(updatedIsLiked);

  //   // Actualiza la lista de favoritas después de eliminar una
  //   const updatedFavoritas = favoritas.filter(
  //     (zapatilla) => zapatilla._id !== item._id
  //   );
  //   setFavoritas(updatedFavoritas);

  //   // Actualiza el localStorage con la lista de favoritas actualizada
  //   localStorage.setItem("favorites", JSON.stringify(updatedFavoritas));
  // };

  // Función para mostrar la alerta de confirmación
  // const showDeleteConfirmation = (item) => {
  //   Swal.fire({
  //     title: "WARNING",
  //     text: "¿Are you sure to delete this item from favorites?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes",
  //     cancelButtonText: "No",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Si el usuario confirma, elimina la tarjeta
  //       eliminarFavorita(item);
  //     }
  //   });
  // };
  // const toggleLike = (item) => {
  //   const updatedIsLiked = { ...isLiked };
  //   if (zapatillas?.includes(item)) {
  //     eliminarFavorita(item);
  //     delete updatedIsLiked[zapa._id];
  //   } else {
  //     agregarFavorita(item);
  //     updatedIsLiked[zapa._id] = true;
  //   }
  //   localStorage.setItem("favorites", JSON.stringify(updatedIsLiked));
  //   setIsLiked(updatedIsLiked);
  // };

  // useEffect((id) => {
  //   // Utiliza Axios para obtener los datos de la API
  //   axios
  //     .get(`http://localhost:3001/favorites/${id}`)
  //     .then((response) => {
  //       if (Array.isArray(response.data.products)) {
  //         // Actualiza el estado con los datos de zapatillas obtenidos
  //         setFavoritas(response.data.products);
  //       } else {
  //         console.error(
  //           "Los datos de zapatillas no son un arreglo válido:",
  //           response.data
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener los datos de zapatillas:", error);
  //     });
  // }, []); // Asegúrate de agregar "axios" como dependencia

  return (
    <div className={DashBoard.DashBoardContainer}>
      {/* <div className={styles.home}>
        <Link className={styles.homebtn} to={"/home"}>
          <p>
            <img src={zapa} alt="" width={30} /> Home
          </p>
        </Link>
      </div> */}

      <div className={styles.fa}>
        <Cards products={storages} />
        <Paginated
          currentPage={paginated.currentPage}
          totalPages={paginated.totalPages}
          onChangePage={handlerChangePage}
        />
      </div>

    </div>
  );
};

export default Favorites;
