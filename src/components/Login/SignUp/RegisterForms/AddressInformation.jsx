import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { signUpValidate } from '../../../../services';
import styles from './RegisterForms.module.css';
import { ICONS } from '../../../../const'
import { InputDate, InputPassword, InputSelect, InputText } from '../../../Inputs';
import { MIN_YEAR_REGISTER, MAX_YEAR_REGISTER } from '../../../../const';

const AddressIcon = {
    country: ICONS.COUNTRY_WHITE,
    state: ICONS.STATE_WHITE,
    city: ICONS.CITY,
    phone: ICONS.PHONE_WHITE,
    address: ICONS.LOCATION_WHITE,
    additional: ICONS.BUILD_WHITE,
    zip_code: ICONS.ZIP_CODE_BLACK
}
const AddressInformation = ({ initValues, onChangeAddressInfo }) => {
    const [info, setInfo] = useState({
        country: '',
        state: '',
        city: '',
        phone: '',
        address: '',
        additional: '',
        zip_code: ''
    })
    const [error, setError] = useState({
        country: '',
        state: '',
        city: '',
        phone: '',
        address: '',
        additional: '',
        zip_code: '',
    })

    useEffect(() => {
        const { country, state, city, phone, address, additional, zip_code } = initValues
        setInfo({ country, state, city, phone, address, additional, zip_code })
    }, [initValues])


    const handlerInputChange = (field, value) => {
        const currentValue = { ...info, [field]: value }
        setInfo(currentValue)
        setError(signUpValidate(currentValue))
        onChangeAddressInfo(currentValue)
    }

    return (
        <>
            {Object.keys(info).map((key, index) => {
                return (
                    <span className={styles.GroupInput} key={index}>
                        <div className={styles.inputGroup}>
                            <h1>{AddressIcon[key]}</h1>
                            {['phone', 'address', 'additional', 'zip_code'].includes(key) ?
                                <InputText
                                    initInput={info[key]}
                                    onChangeInput={(input) => handlerInputChange(key, input)}
                                    buttonClear={true}
                                    placeHolder={{
                                        phone: 'Phone',
                                        address: 'Address',
                                        additional: '(Optional) Aparment, Tower ',
                                        zip_code: 'Zip Code',
                                    }[key]}
                                    style={{ flexDirection: 'row', alignItems: 'start', gap: '4px', input: { width: '100%', background: 'rgb(217, 217, 217)' } }} />
                                : ['country', 'state', 'city',].includes(key) ?
                                    <InputSelect
                                        initInput={info[key]}
                                        onChangeInput={(input) => handlerInputChange(key, input)}
                                        style={{ flexDirection: 'row', alignItems: 'start', gap: '4px', input: { width: '100%', background: 'rgb(217, 217, 217)' } }}
                                    /> : null}
                        </div>
                        {error[key] && <div className={styles.errorText}>{error[key]}</div>}
                    </span>)
            })}
        </>
    )
}

AddressInformation.propTypes = {
    initValues: PropTypes.object,
    onChangeAddressInfo: PropTypes.func,
}

export default AddressInformation