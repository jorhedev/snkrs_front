import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import styles from './InfoProduct.module.css'
import { InputSelect, InputText } from '../../../../Inputs'
import UploadSquare from '../Components/UploadSquare/UploadSquare'
import { GENDER } from '../../../../../const'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBrands, fetchCategories, fetchTypes } from '../../../../../redux/filters'

const intInfo = {
   sku: '',
   model: '',
   brand: '',
   gender: '',
   category: '',
   type: '',
   price: '',
   image: [
      {
         id: '',
         src: '',
         size: '',
         color: '',
      }
   ]
}
const InfoProduct = ({ initInfoProduct = {}, onChangeInfoProduct, errors }) => {
   const dispatch = useDispatch()
   const [infoProduct, setInfoProduct] = useState(intInfo)
   const genders = GENDER
   const brands = useSelector(({ filters }) => filters.data.brands)
   console.log("🚀 ~ file: InfoProduct.jsx:32 ~ InfoProduct ~ brands:", brands)
   const types = useSelector(({ filters }) => filters.data.types)
   const categories = useSelector(({ filters }) => filters.data.categories)

   //? get Categories
   useEffect(() => {
      dispatch(fetchCategories())
   }, [dispatch]);

   //? get Brands
   useEffect(() => {
      dispatch(fetchBrands())
   }, [dispatch]);

   //? get Types
   useEffect(() => {
      dispatch(fetchTypes(infoProduct.category))
   }, [dispatch]);


   const handlerUploadImage = () => {

   }

   const handlerSelectChange = (field, value) => {
      const currentValue = { ...infoProduct, [field]: value }
      setInfoProduct(currentValue)
      onChangeInfoProduct(currentValue)
   }

   return (
      <div className={styles.InfoProductContainer}>
         <div className={styles.DataInfo} >
            {Object.keys(infoProduct).map((key, index) => {
               return (
                  <div className={styles.DataInputsProducts} key={index}>
                     <span className={styles.KeyData}>{key.toUpperCase()}</span>
                     {'sku'.includes(key) &&
                        < InputSelect
                           name={key}
                           options={['NEW PRODUCT......']}
                           style={{
                              width: '400px',
                              select: { borderBottom: '0px solid black', borderInlineEnd: '0px solid black' }
                           }}
                           initSelect={infoProduct[key]}
                           onChangeSelect={(input) => handlerSelectChange(key, input)}

                        />
                     }
                     {['model', 'price'].includes(key) &&
                        <InputText
                           name={key}
                           initInput={infoProduct[key]}
                           buttonClear={true}
                           placeHolder={`${key.toUpperCase()}`}
                           style={{
                              width: '400px',
                              input: { width: '380px', fontSize: '20px' }
                           }}
                           onChangeInput={(input) => handlerSelectChange(key, input)}
                        />
                     }
                     {['brand', 'gender', 'category', 'type'].includes(key) &&
                        < InputSelect
                           name={key}
                           options={key === 'brand' ? brands : key === 'category' ? categories : key == 'type' ? types : genders}
                           style={{
                              width: '400px',
                              select: { borderBottom: '5px solid black', borderInlineEnd: '2px solid black' }
                           }}
                           initSelect={infoProduct[key]}
                           onChangeSelect={(input) => handlerSelectChange(key, input)}

                        />
                     }
                  </div>
               )
            })}
            <div className={styles.Images}>
               <div className={styles.ImageContainer}>
                  <div className={styles.UploadImages}>
                     <UploadSquare onImageUpload={handlerUploadImage} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

InfoProduct.propTypes = {
   initInfoProduct: PropTypes.object,
   errors: PropTypes.object,
   onChangeInfoProduct: PropTypes.func,
}

export default InfoProduct