import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import styles from './Colors.module.css'
import { ICONS } from '../../../../../../../const';

const Sort = ({ initSort = '', onSelectSort }) => {
  const [Sort, setSort] = useState('')
  const [viewSorts, setViewSorts] = useState(false)


  const handlerSelectSort = (data) => {
    setSort(data)
    onSelectSort(data)
  }
  const handlerViewSorts = () => {
    setViewSorts(!viewSorts)
  }

  return (
    <div className={styles.SortContainer} >
      <span className={styles.SortHeader}>
        <span className={styles.Title}>Sort</span>
        <div className={styles.Icons}>
          {!viewSorts ?
            <h4 onClick={handlerViewSorts}>{ICONS.ARROW_DOWN('#828282')}</h4> :
            <h4 onClick={handlerViewSorts} className={styles.ArrowActive}>{ICONS.ARROW_UP('#828282')}</h4>
          }
        </div>
      </span>
      <div className={viewSorts ? styles.PaletteSort : null} >
        {viewSorts && (
          Sort?.map(({ name, html }, index) => {
            return (
              <div className={styles.MarkSort} key={index}>
                <button
                  title={name}
                  className={styles.BtnSort} style={{ background: `${html}` }}
                  onClick={() => handlerSelectSort(name)}
                />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

Sort.propTypes = {
  initSort: PropTypes.string,
  onSelectSort: PropTypes.func,
  aorts: PropTypes.array
}

export default Sort