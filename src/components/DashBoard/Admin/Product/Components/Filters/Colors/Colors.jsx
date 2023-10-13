import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './Colors.module.css'
import { ICONS } from '../../../../../../../const';

const Colors = ({ colors = [] }) => {
  const [viewPaletteColors, setViewPaletteColors] = useState(false)

  const handlerSelectColor = () => {

  }

  return (
    <div className={styles.ColorsContainer}>
      <span className={styles.ColorsHeader}>
        <span className={styles.Title}>Colors</span>
        <div className={styles.Icons}>
          {!viewPaletteColors ?
            <h4>{ICONS.ARROW_DOWN('#828282')}</h4> :
            <h4>{ICONS.ARROW_UP('#828282')}</h4>
          }
        </div>
      </span>
      <div className={styles.PaletteColors}>
        {viewPaletteColors && (
          colors?.map(({ name, html }, index) => {
            return (
              <div key={index}>
                <button className={styles.BtnColor} onClick={handlerSelectColor} />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired

}

export default Colors