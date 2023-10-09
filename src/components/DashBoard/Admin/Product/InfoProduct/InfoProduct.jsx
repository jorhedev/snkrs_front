import React, { useState } from 'react'
import styles from './InfoProduct.module.css'
import { InputSelect, InputText } from '../../../../Inputs'

const intInfoProduct = {
    sku: '',
    model: '',
    brand: '',
    gener: '',
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
const InfoProduct = () => {
    const [info, setInfo] = useState(intInfoProduct)

    return (
        <>
            <div className={styles.DataInfo} >
                {Object.keys(info).map((key, index) => {
                    return (
                        <div className={styles.DataInputsProducts} key={index}>
                            <span className={styles.KeyData}>{key.toUpperCase()}</span>
                            {['model', 'price'].includes(key) &&
                                <InputText
                                    style={{
                                        width: '300px'
                                    }}
                                />
                            }
                            {['brand', 'gener', 'category', 'type'].includes(key) &&
                                < InputSelect
                                    style={{
                                        width: '300px'
                                    }}
                                />
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default InfoProduct