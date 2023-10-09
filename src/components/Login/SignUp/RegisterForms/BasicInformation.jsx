import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { signUpValidate } from '../../../../services';
import styles from './RegisterForms.module.css';
import { ICONS, SIGNUP_STORAGE } from '../../../../const'
import { InputDate, InputPassword, InputText } from '../../../Inputs';
import { MIN_YEAR_REGISTER, MAX_YEAR_REGISTER } from '../../../../const';

const BasicIcon = {
  nit: ICONS.NIT_WHITE,
  birthday: ICONS.BIRTHDAY_WHITE,
  firstName: ICONS.PERSON,
  lastName: ICONS.PERSON,
  email: ICONS.E_MAIL,
  password: ICONS.PASSWORD,
}

const BasicInformation = ({ initValues = {}, errors, onChangeBasicInfo }) => {
  const [error, setError] = useState(errors)
  const [info, setInfo] = useState({
    nit: '',
    birthday: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    const { nit, birthday, firstName, lastName, email, password } = initValues
    setInfo({ nit, birthday, firstName, lastName, email, password })
    setError(errors)
  }, [initValues, errors])


  const handlerInputChange = (field, value) => {
    const currentValue = { ...info, [field]: value }
    setInfo(currentValue)
    onChangeBasicInfo(currentValue)
  }

  return (
    <>
      {Object.keys(info).map((key, index) => {
        return (
          <span className={styles.GroupInput} key={index}>
            <div className={styles.inputGroup}>
              <h1>{BasicIcon[key]}</h1>
              {['firstName', 'lastName', 'email'].includes(key) ?
                <InputText
                  initInput={info[key]}
                  onChangeInput={(input) => handlerInputChange(key, input)}
                  buttonClear={true}
                  placeHolder={{
                    firstName: 'First Name',
                    lastName: 'Last Name',
                    email: 'Email',
                  }[key]}
                  namesFormat={['firstName', 'lastName'].includes(key) ? true : false}
                  style={{ flexDirection: 'row', alignItems: 'start', gap: '4px', input: { width: '100%', background: 'rgb(217, 217, 217)' } }} />
                : ['nit', 'password'].includes(key) ?
                  <InputPassword
                    initInput={info[key]}
                    onChangeInput={(input) => handlerInputChange(key, input)}
                    placeHolder={{
                      nit: 'NIT',
                      password: 'Password',
                    }[key]}
                    style={{ flexDirection: 'row', alignItems: 'start', gap: '4px', input: { width: '100%' } }}
                  />
                  : ['birthday'].includes(key) ?
                    <InputDate
                      initInput={info[key]}
                      minDate={MIN_YEAR_REGISTER}
                      maxDate={MAX_YEAR_REGISTER}
                      onChangeInput={(input) => handlerInputChange(key, input)}
                      style={{ flexDirection: 'row', alignItems: 'start', gap: '4px', input: { width: '100%', background: 'rgb(217, 217, 217)' } }}
                    />
                    : null}
            </div>
            {error[key] && <div className={styles.errorText}>{error[key]}</div>}
          </span>)
      })}
    </>
  )
}

BasicInformation.propTypes = {
  initValues: PropTypes.object,
  errors: PropTypes.object,
  onChangeBasicInfo: PropTypes.func,
};

export default BasicInformation