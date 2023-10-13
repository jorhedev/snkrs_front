import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { signUpValidate } from '../../../../services';
import styles from './RegisterForms.module.css';
import { ICONS } from '../../../../const'
import { InputSelect, InputText } from '../../../Inputs';
import { useDispatch, useSelector } from 'react-redux';
import { clearCity, clearState, fetchCity, fetchCountry, fetchState } from '../../../../redux/country';

const AddressIcon = {
    country: ICONS.COUNTRY('white'),
    state: ICONS.STATE('white'),
    city: ICONS.CITY('white'),
    phone: ICONS.PHONE('white'),
    address: ICONS.LOCATION('white'),
    additional: ICONS.BUILD('white'),
    zip_code: ICONS.ZIP_CODE('none')
}

const initAddress = {
    country: '',
    state: '',
    city: '',
    phone: '',
    address: '',
    additional: '',
    zip_code: ''
}
const AddressInformation = ({ initAddressInfo, errors, onChangeAddressInfo }) => {
    const dispatch = useDispatch()
    const country = useSelector(({ country }) => { return country.country })
    const state = useSelector(({ country }) => { return country.state })
    const city = useSelector(({ country }) => { return country.city })
    const [error, setError] = useState(errors)
    const [info, setInfo] = useState(initAddress)

    // ? Load initial values
    useEffect(() => {
        const { country, state, city, phone, address, additional, zip_code } = initAddressInfo
        setInfo({ country, state, city, phone, address, additional, zip_code })
        setError(errors)
    }, [initAddressInfo, errors])

    //? get Countries
    useEffect(() => {
        dispatch(fetchCountry());
    }, [dispatch]);

    //? get States
    useEffect(() => {
        if (info.country) {
            dispatch(clearState())
            dispatch(fetchState(info.country));
        }
    }, [dispatch, info.country]);

    //? get Cities
    useEffect(() => {
        if (info.country && info.state) {
            dispatch(clearCity())
            dispatch(fetchCity(info.country, info.state));
        }
    }, [dispatch, info.country, info.state]);


    const handlerInputChange = (field, value) => {
        const currentValue = { ...info, [field]: value }
        setInfo(currentValue)
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
                                        zip_code: '(Optional) Zip Code',
                                    }[key]}
                                    style={{ flexDirection: 'row', alignItems: 'start', gap: '4px', input: { width: '100%', background: 'rgb(217, 217, 217)' } }} />
                                :
                                ['country', 'state', 'city'].includes(key) &&
                                <InputSelect
                                    options={key === 'country' ? country : key === 'state' ? state : city}
                                    initSelect={info[key]}
                                    onChangeSelect={(input) => handlerInputChange(key, input)}
                                    style={{ flexDirection: 'row', alignItems: 'start', gap: '4px', input: { width: '100%', background: 'rgb(217, 217, 217)' } }}
                                />}
                        </div>
                        {error[key] ? <div className={styles.errorText}>{error[key]}</div> : null}
                    </span>)
            })}
        </>
    )
}

AddressInformation.propTypes = {
    initAddressInfo: PropTypes.object,
    errors: PropTypes.object,
    onChangeAddressInfo: PropTypes.func,
}

export default AddressInformation