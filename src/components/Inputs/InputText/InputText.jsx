import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './InputText.module.css';
import { GiBroom } from 'react-icons/gi'
import { handlerNames } from '../../../services';

const InputText = ({
  initInput = '',
  onChangeInput,
  errors,
  tag = '',
  name = '',
  placeHolder = '',
  disabled = false,
  buttonClear = false,
  namesFormat = false,
  style }) => {
  const [state, setState] = useState(initInput)

  useEffect(() => {
    initInput !== '' && setState(initInput)
  }, [initInput]);

  const handlerInputChange = (event) => {
    const { value } = event.target
    const currentValue = namesFormat ? handlerNames(value, true) : value
    setState(currentValue)
    onChangeInput(currentValue)
  }

  const handlerClearInput = (event) => {
    event.preventDefault()
    setState('')
    onChangeInput('')
  }

  return (
    <div className={styles.InputText}
      style={{ flexDirection: 'column', alignItems: 'center', gap: '30px', ...style }}  >
      {tag !== '' && <h3 style={{ fontFamily: 'MontHeavy', color: 'white', fontSize: '24px', ...style?.h3 }}>{tag} </h3>}
      <div className={styles.DateFile} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', background: '#D9D9D9' }}>
        {!disabled && <input
          name={name}
          style={{ width: '200px', height: '45px', background: '#D9D9D9', fontSize: '15px', fontFamily: 'MontHeavy', ...style?.input }}
          type='text'
          autoComplete="off"
          value={state || ''}
          placeholder={`${placeHolder}`}
          onChange={(event) => { handlerInputChange(event) }}
        />}
        {disabled && <input
          name={name}
          style={{ width: '200px', height: '45px', background: '#D9D9D9', fontSize: '15px', fontFamily: 'MontHeavy', ...style?.input }}
          type='text'
          autoComplete="off"
          value={state || ''}
          placeholder={`${placeHolder}`}
          disabled
        />}
        {buttonClear && <button className={styles.ClearInput} onClick={handlerClearInput} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <GiBroom className={styles.Icon} />
        </button>}
      </div>
      {errors && <label className={styles.ErrorLabel}>{errors}</label>}
    </div >
  )
}

InputText.propTypes = {
  initInput: PropTypes.string,
  onChangeInput: PropTypes.func,
  name: PropTypes.string,
  errors: PropTypes.string,
  tag: PropTypes.string,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  buttonClear: PropTypes.bool,
  namesFormat: PropTypes.bool,
  style: PropTypes.object,

};

export default InputText;
