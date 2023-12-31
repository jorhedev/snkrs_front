import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import styles from './Colors.module.css'
import { ICONS } from '../../../../../../../const';

const Colors = ({ initColor = '', colors = [], onSelectColor }) => {
  const [hover, setHover] = useState(false)
  const [color, setColor] = useState([])
  const [viewColors, setViewColors] = useState(false)


  const handlerSelectColor = (data) => {
    let currentColors = [...color];
    if (currentColors.includes(data)) {
      currentColors = currentColors.filter(selectedColor => selectedColor !== data);
    } else {
      currentColors.push(data);
    }
    setColor(currentColors);
    onSelectColor(currentColors);
  };

  const handlerViewColors = () => {
    setViewColors(!viewColors)
  }

  const handlerHoverEnter = () => { setHover(!hover) }
  const handlerHoverLeave = () => { setHover(!hover) }

  return (
    <div className={styles.ColorsContainer} >
      <span className={styles.ColorsHeader}>
        <span className={styles.Title}>Colors</span>
        <div className={styles.Icons}>
          {!viewColors ?
            <h4
              onMouseEnter={handlerHoverEnter}
              onMouseLeave={handlerHoverLeave}
              onClick={handlerViewColors}>{ICONS.ARROW_DOWN(!hover ? '#828282' : 'green')}</h4> :
            <h4
              onMouseEnter={handlerHoverEnter}
              onMouseLeave={handlerHoverLeave}
              onClick={handlerViewColors}
              className={styles.ArrowActive}>{ICONS.ARROW_UP(hover ? '#828282' : 'green')}</h4>
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
                  className={color.includes(name) ? styles.BtnColorActive : styles.BtnColor}
                  style={{ background: `${html}` }}
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