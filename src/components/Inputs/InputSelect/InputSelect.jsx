import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './InputSelect.module.css';
import { handlerNames } from '../../../services';

const InputSelect = ({ initSelect = '', options = [], onChangeSelect, errors, tag = '', placeHolder = '', CapitalLetter = false, style }) => {
  const [selected, setSelected] = useState(initSelect);

  useEffect(() => {
    initSelect !== '' && setSelected(initSelect)
  }, [initSelect]);

  const handleSelectChange = (event) => {
    const { value } = event.target
    if (selected !== value) {
      setSelected(value);
      onChangeSelect(value)
    }
  };

  return (
    <div className={styles.InputSelect} style={{ flexDirection: 'column', alignItems: 'center', gap: '30px', ...style }} >
      {tag !== '' && <h3 style={{ fontFamily: 'MontHeavy', color: 'white', fontSize: '24px', ...style?.h3 }}>{tag} </h3>}
      <div className={styles.DateFile} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', background: '#D9D9D9', ...style.DateFile }}>
        <select style={{ fontFamily: 'Mont', borderBottom: '5px solid green', borderInlineEnd: '1px solid green', ...style?.select }} className={styles.Selecter} value={selected} onChange={handleSelectChange}>
          <option className={styles.OptionDefault} style={{ ...style?.select }} value="" disabled hidden>Select an Option</option>
          {options?.map((value, index) => {
            return (
              <option
                key={index}
                value={value}
                style={{ ...style?.select }}
              >{CapitalLetter ? value.toUpperCase() : handlerNames(value)}
              </option>
            )
          })
          }
        </select>
      </div>
      {errors && <label className={styles.ErrorLabel}>{errors}</label>}
    </div>
  )
}

InputSelect.propTypes = {
  initSelect: PropTypes.string,
  options: PropTypes.array,
  onChangeSelect: PropTypes.func,
  errors: PropTypes.string,
  tag: PropTypes.string,
  placeHolder: PropTypes.string,
  CapitalLetter: PropTypes.bool,
  style: PropTypes.object
};

export default InputSelect;
