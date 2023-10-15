import React, { useState } from "react";
import styleDashBoard from '../../DashBoard.module.css'

const Sales = () => {

    return (
        <div></div>
    )
    //     <div className={styleDashBoard.DashBoardContainer}>
    //         <div className={styles.TableContainer}>
    //             <label className={styles.TitleTable}><h1>{MENU_ADMIN.brands.icon}</h1>BRANDS...</label>
    //             <div className={styles.TableData}>
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <th style={{ color: '#f4f4f4' }}>
    //                                 LOGO
    //                             </th>
    //                             <th>
    //                                 <span className={styles.ItemTable}>
    //                                     <div className={styles.BorderTable}>
    //                                         BRAND
    //                                     </div>
    //                                 </span>
    //                             </th>
    //                             <th>
    //                                 <span className={styles.ItemTable}>
    //                                     <div className={styles.BorderTable}>
    //                                         WEBSITE  </div>
    //                                 </span>
    //                             </th>
    //                             <th>
    //                                 <span className={styles.ItemTable}>
    //                                     <div className={styles.BorderTable}>
    //                                         EMAIL  </div>
    //                                 </span>
    //                             </th>
    //                             <th>
    //                                 <span className={styles.ItemTable}>
    //                                     <div className={styles.BorderTable}>
    //                                         PHONE  </div>
    //                                 </span>
    //                             </th>
    //                             <th> <button
    //                                 onClick={handlerAddBrand}
    //                                 onMouseEnter={() => handlerMouseEnter('add', null)}
    //                                 onMouseLeave={() => handlerMouseLeave('add', null)}
    //                             ><h1>{ICONS.PLUS(isHovered.add ? '#4CAF50' : '#f4f4f4')}</h1></button></th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {!!brands.length && brands?.map((brand, index) => {
    //                             return (
    //                                 <tr key={index}>
    //                                     <td>
    //                                         <div className={styles.ItemTable}>
    //                                             <div className={styles.ImageContainer}>
    //                                                 <img className={styles.Image} src={brand?.image?.src} alt={brand?.image?.id} />
    //                                             </div>
    //                                         </div>
    //                                     </td>
    //                                     <td>
    //                                         <span className={styles.ItemTable}>
    //                                             <div className={styles.BorderTable}>{brand?.brand.toUpperCase()}</div>
    //                                         </span>
    //                                     </td>
    //                                     <td>
    //                                         <div className={styles.ItemTable}>
    //                                             <div className={styles.BorderTable} >
    //                                                 <a href={brand?.website}>{brand?.website}</a>
    //                                             </div>
    //                                         </div>
    //                                     </td>
    //                                     <td>
    //                                         <div className={styles.ItemTable}>
    //                                             <div className={styles.BorderTable}>
    //                                                 <a className={styles.Email} href={`mailto:${brand?.email}`}>{brand?.email}</a>
    //                                             </div>
    //                                         </div>
    //                                     </td>
    //                                     <td>
    //                                         <div className={styles.ItemTable}>
    //                                             <div className={styles.BorderTable}>{brand?.phone}</div>
    //                                         </div>
    //                                     </td>
    //                                     <td>
    //                                         <button
    //                                             onClick={() => handlerUpdateBrand(brand?._id)}
    //                                             onMouseEnter={() => handlerMouseEnter(index, 'edit')}
    //                                             onMouseLeave={() => handlerMouseLeave(index, 'edit')}
    //                                         >
    //                                             <h2>{ICONS.EDIT(isHovered[index]?.edit ? '#4CAF50' : '#454444')}</h2>
    //                                         </button>
    //                                         <button
    //                                             onClick={() => handlerDeleteBrand(brand?._id)}
    //                                             onMouseEnter={() => handlerMouseEnter(index, 'trash')}
    //                                             onMouseLeave={() => handlerMouseLeave(index, 'trash')}
    //                                         >
    //                                             <h2>{ICONS.TRASH(isHovered[index]?.trash ? '#4CAF50' : '#454444')}</h2>
    //                                         </button>
    //                                     </td>
    //                                 </tr>)
    //                         })}
    //                     </tbody>
    //                 </table>
    //             </div >
    //         </div >
    //     </div >
};


export default Sales