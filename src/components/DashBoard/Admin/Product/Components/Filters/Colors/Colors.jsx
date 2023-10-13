import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import styles from './Colors.module.css'
import { ICONS } from '../../../../../../../const';

const Colors = ({ initColor = '', colors = [], onSelectColor }) => {
  const [color, setColor] = useState('')
  const [viewColors, setViewColors] = useState(false)


  const handlerSelectColor = (data) => {
    setColor(data)
    onSelectColor(data)
  }
  const handlerViewColors = () => {
    setViewColors(!viewColors)
  }

  return (
    <div className={styles.ColorsContainer} >
      <span className={styles.ColorsHeader}>
        <span className={styles.Title}>Colors</span>
        <div className={styles.Icons}>
          {!viewColors ?
            <h4 onClick={handlerViewColors}>{ICONS.ARROW_DOWN('#828282')}</h4> :
            <h4 onClick={handlerViewColors} className={styles.ArrowActive}>{ICONS.ARROW_UP('#828282')}</h4>
          }
        </div>
      </span>
      <div className={viewColors ? styles.PaletteColors : null} >
        {viewColors && (
          colors?.map(({ name, html }, index) => {
            return (
              <div className={styles.MarkColor} key={index}>
                <button
                  title={name}
                  className={styles.BtnColor} style={{ background: `${html}` }}
                  onClick={() => handlerSelectColor(name)}
                />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

Colors.propTypes = {
  initColor: PropTypes.string,
  onSelectColor: PropTypes.func,
  colors: PropTypes.array
}

export default Colors