import React from 'react'
import ZapatillasCard from '../../components/ZapatillaCard/ZapatillasCard'
import Banner from '../../components/banner/banner'
import Banner1 from '../../components/banner/banner1'

import styles from './Listado.module.css'

const  ListadoBusqueda = () => {
  return (
    <>
    <div className={styles.banner}>

        <Banner/>
    </div>
        <div className={styles.zapatilla}>

        <ZapatillasCard/>
        </div>
        <div className={styles.banner1}>

       <Banner1/>
        </div>
    </>
  )
}

export default ListadoBusqueda
