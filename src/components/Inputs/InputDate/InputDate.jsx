import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './InputDate.module.css';
import { GiBroom } from 'react-icons/gi'

const InputDate = ({ initInput = '', onChangeInput, errors, minDate = '', maxDate = '', tag = '', placeHolder = '', buttonClear = false, style }) => {
  const today = new Date().toISOString().split('T')[0];
  const [state, setState] = useState(initInput || '')

  useEffect(() => {
    initInput !== '' && setState(initInput)
  }, [initInput, minDate]);

  const handlerInputChange = (event) => {
    const { value } = event.target
    setState(value)
    onChangeInput(value)
  }

  const handlerClearInput = () => {
    setState('')
    onChangeInput('')
  }


  return (
    <div className={styles.InputDate} style={{ flexDirection: 'column', alignItems: 'center', gap: '30px', ...style }}   >
      {tag !== '' && <h3 style={{ fontSize: '24px', ...style?.h3 }}>{tag}</h3>}
      <div className={styles.DateFile} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', background: '#D9D9D9' }}>
        <input
          style={{ width: '200px', height: '45px', background: '#D9D9D9', fontSize: '15px;', fontFamily: 'MontHeavy', ...style?.input }}
          type='date'
          autoComplete="off"
          value={state}
          min={minDate ? minDate : today}
          max={maxDate ? maxDate : null}
          placeholder={`${placeHolder}`}
          onChange={(event) => { handlerInputChange(event) }}
        />
        {buttonClear && <a className={styles.ClearInput} onClick={handlerClearInput}>
          <GiBroom className={styles.Icon} />
        </a>}
      </div>
      {errors && <label className={styles.ErrorLabel}>{errors}</label>}
    </div>
  )
}

InputDate.propTypes = {
  initInput: PropTypes.string,
  onChangeInput: PropTypes.func,
  errors: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  tag: PropTypes.string,
  placeHolder: PropTypes.string,
  buttonClear: PropTypes.bool,
  style: PropTypes.object,

};

export default InputDate;
