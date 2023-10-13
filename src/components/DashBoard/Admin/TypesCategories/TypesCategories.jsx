import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './TypesCategories.module.css'
import styleDashBoard from '../../DashBoard.module.css'
import { InputSelect } from '../../../Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchTypes } from '../../../../redux/filters'
import { ICONS, MENU_ADMIN } from '../../../../const'
import { ModalDataCreate, ModalDataDelete, ModalDataUpdate } from '../../../Alerts'

const TypesCategories = () => {
    const dispatch = useDispatch()
    const [info, setInfo] = useState({ category: null, type: null })
    const [isHovered, setIsHovered] = useState({
        types: { 0: { edit: false, remove: false } },
        category: { add: false, remove: false, edit: false }
    })
    const types = useSelector(({ filters }) => filters.detail.types)
    const categories = useSelector(({ filters }) => filters.detail.categories)

    useEffect(() => {
        info.category != null && dispatch(fetchTypes(info.category))
    }, [dispatch, info.category])

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const handlerSelectChange = (data) => {
        setInfo({
            ...info,
            category: categories.map(({ category }) => category).includes(data) ? data : null
        })
    }

    const handlerEditCategory = (data) => {

    }

    const handlerMouseEnter = (field, button, index,) => {
        if (index === undefined) return setIsHovered({ ...isHovered, [field]: { [button]: true } });
        return setIsHovered({ ...isHovered, [field]: { [index]: { [button]: true } } });

    }
    const handlerMouseLeave = (field, button, index,) => {
        if (index === undefined) return setIsHovered({ ...isHovered, [field]: { [button]: false } });
        return setIsHovered({ ...isHovered, [field]: { [index]: { [button]: false } } });
    }

    const handlerAddCategory = () => {
        ModalDataCreate('Category')
    }
    const handlerDeleteCategory = () => {
        const id = categories.find(({ category }) => category === info.category)._id
        ModalDataDelete('Category', id)

    }
    const handlerUpdateCategory = () => {
        const id = categories.find(({ category }) => category === info.category)._id
        ModalDataUpdate(info.category, 'Category', id)
    }

    const handlerAddType = () => {
        ModalDataCreate('Type')
    }
    const handlerDeleteType = (event, id) => {
        event.stopPropagation()
        ModalDataDelete('Type', id)
    }
    const handlerUpdateType = (id) => {
        ModalDataUpdate(info.type, 'Type', id)
    }
    return (
        <div className={styleDashBoard.DashBoardContainer}>
            <div className={styles.TypeCategoryContainer}>
                <label className={styles.TitleTypeCategory}><h1>{MENU_ADMIN.typesCategories.icon}</h1>TYPES & CATEGORIES...</label>
                <div className={styles.CategoryHeader}>
                    <label className={styles.TitleCategory}>CATEGORY</label>
                    <div className={styles.DataInfo} >
                        < InputSelect
                            options={['NEW CATEGORY......', ...categories.map(({ category }) => category)]}
                            initSelect={info.category || 'NEW CATEGRY......'}
                            style={{
                                width: '380px',
                                select: { height: '60px', borderBottom: '5px solid black', borderInlineEnd: '2px solid black' }
                            }}
                            CapitalLetter={true}
                            onChangeSelect={(input) => handlerSelectChange(input)}

                        />
                    </div>
                    {categories.map(({ category }) => category).includes(info.category) ? (
                        <span className={styles.BtnEditDelete}>
                            <button
                                onClick={handlerUpdateCategory}
                                onMouseEnter={() => handlerMouseEnter('category', 'edit')}
                                onMouseLeave={() => handlerMouseLeave('category', 'edit')}
                            >
                                <h2>{ICONS.EDIT(isHovered.category.edit ? '#4CAF50' : '#454444')}</h2>
                            </button>
                            <button
                                onClick={handlerDeleteCategory}
                                onMouseEnter={() => handlerMouseEnter('category', 'remove')}
                                onMouseLeave={() => handlerMouseLeave('category', 'remove')}
                            >
                                <h2>{ICONS.TRASH(isHovered.category.remove ? '#4CAF50' : '#454444')}</h2>
                            </button>
                        </span>) :
                        <button
                            className={styles.BtnAddCategory}
                            onClick={handlerAddCategory}
                            onMouseEnter={() => handlerMouseEnter('category', 'add')}
                            onMouseLeave={() => handlerMouseLeave('category', 'add')}
                        ><h1>{ICONS.PLUS(isHovered.category.add ? '#4CAF50' : '#454444')}</h1></button>
                    }

                </div>
                <div className={styles.CategoryBody}>
                    <div className={styles.inputContainer}>
                        <div className={styles.HotelRooms}>
                            <div className={styles.SelectedRoom}>
                                {!!types.length && !!info.category && (types?.map(({ type, _id }, index) => {
                                    return (
                                        <div className={styles.UpdateButton}
                                            key={index} title={'Click to update'}
                                            onClick={(event) => handlerUpdateType(_id)}
                                            onMouseEnter={() => { setInfo({ ...info, type: type }) }}
                                        >
                                            {type}
                                            < button
                                                title={'delete type'}
                                                className={styles.BtnDeleteType}
                                                onClick={(event) => handlerDeleteType(event, _id)}
                                                onMouseEnter={() => handlerMouseEnter('types', 'remove', index)}
                                                onMouseLeave={() => handlerMouseLeave('types', 'remove', index)}
                                            ><h1>{ICONS.TRASH(isHovered?.types[index]?.remove ? '#4CAF50' : '#454444')}</h1></button>
                                        </div>
                                    )
                                }))}
                                {!!types.length && !!info.category && < button
                                    className={styles.BtnAddType}
                                    onClick={handlerAddType}
                                    onMouseEnter={() => handlerMouseEnter('types', 'add')}
                                    onMouseLeave={() => handlerMouseLeave('types', 'add')}
                                ><h1>{ICONS.PLUS(isHovered.types.add ? '#4CAF50' : '#454444')}</h1></button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

TypesCategories.propTypes = {}

export default TypesCategories