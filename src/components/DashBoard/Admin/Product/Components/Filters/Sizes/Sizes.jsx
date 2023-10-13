import React, { useState } from 'react'
import styles from './Sizes.module.css'
import PropTypes from 'prop-types';
import { ICONS } from '../../../../../../../const'

const Sizes = ({ sizes, onSelectSize }) => {
  const [viewSizes, setViewSizes] = useState(false)

  const handlerSelectSize = (size) => {

  }
  return (
    <div className={styles.SizesContainer}>
      <span className={styles.SizesHeader}>
        <span className={styles.Title}>Sizes</span>
        <div className={styles.Icons}>
          {!viewSizes ?
            <h4>{ICONS.ARROW_DOWN('#828282')}</h4> :
            <h4>{ICONS.ARROW_UP('#828282')}</h4>
          }
        </div>
      </span>
      <div className={styles.PaletteSizes}>
        {viewSizes && (
          sizes?.map((size, index) => {
            return (
              <div key={index}>
                <button className={styles.BtnColor} onClick={handlerSelectSize} />
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