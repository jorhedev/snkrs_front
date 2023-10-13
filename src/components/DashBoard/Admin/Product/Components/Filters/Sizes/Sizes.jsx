import React, { useState } from 'react'
import styles from './Sizes.module.css'
import PropTypes from 'prop-types';
import { ICONS } from '../../../../../../../const'

const Sizes = ({ sizes, onSelectSize }) => {
  const [viewSizes, setViewSizes] = useState(false)
  const [selectSize, setSelectSize] = useState('')

  const handlerViewSizes = () => {
    !!sizes.length && setViewSizes(!viewSizes)
  }
  const handlerSelectSize = (data) => {
    setSelectSize(data)
    onSelectSize(data)

  }

  return (
    <div className={styles.SizesContainer}>
      <span className={styles.SizesHeader}>
        <span className={styles.Title}>Size (US)</span>
        <div className={styles.Icons}>
          {!viewSizes ?
            <h4 onClick={handlerViewSizes}>{ICONS.ARROW_DOWN('#828282')}</h4> :
            <h4 onClick={handlerViewSizes} className={styles.ArrowActive}>{ICONS.ARROW_UP('#828282')}</h4>
          }
        </div>
      </span>
      <div className={viewSizes ? styles.PaletteSizes : null}>
        {viewSizes && (
          sizes?.map((size, index) => {
            return (
              <div className={styles.MarkSizes} key={index}>
                <button
                  title={size}
                  className={styles.BtnSizes}
                  onClick={() => handlerSelectSize(size)}
                >{parseFloat(size)}</button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

Sizes.propTypes = {
  sizes: PropTypes.array.isRequired,
  onSelectSize: PropTypes.func

}

export default Sizes