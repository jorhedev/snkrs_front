import React, { useState } from 'react'
import styles from './Sizes.module.css'
import PropTypes from 'prop-types';
import { ICONS } from '../../../../../../../const'

const Sizes = ({ sizes, onSelectSize }) => {
  const [hover, setHover] = useState(false)
  const [viewSizes, setViewSizes] = useState(false)
  const [selectSize, setSelectSize] = useState('')

  const handlerViewSizes = () => {
    !!sizes.length && setViewSizes(!viewSizes)
  }
  const handlerSelectSize = (data) => {
    let currentData = ''
    data == selectSize ? currentData = '' : currentData = data
    setSelectSize(currentData)
    onSelectSize(currentData)
  }

  const handlerHoverEnter = () => { setHover(!hover) }
  const handlerHoverLeave = () => { setHover(!hover) }

  return (
    <div className={styles.SizesContainer}>
      <span className={styles.SizesHeader}>
        <span className={styles.Title}>Size (US) <h3> {selectSize}</h3></span>
        <div className={styles.Icons}>
          {!viewSizes ?
            <h4
              onMouseEnter={handlerHoverEnter}
              onMouseLeave={handlerHoverLeave}
              onClick={handlerViewSizes}>{ICONS.ARROW_DOWN(!hover ? '#828282' : 'green')}</h4> :
            <h4
              onMouseLeave={handlerHoverLeave}
              onMouseEnter={handlerHoverEnter}
              onClick={handlerViewSizes}
              className={styles.ArrowActive}>{ICONS.ARROW_UP(hover ? '#828282' : 'green')}</h4>
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
                  className={size === selectSize ? styles.BtnSizesActive : styles.BtnSizes}
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