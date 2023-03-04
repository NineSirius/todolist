import React, { useState } from 'react'
import { Button } from '../../components/UI/Button'
import { FaCheck, FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

import styles from './TasksList.module.css'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { editTitle } from '../../store/reducers/list.reducer'

export const ListItem = ({ children, active, change, del, index }) => {
    const [edit, setEdit] = useState(false)
    const [editValue, setEditValue] = useState({
        title: '',
        status: active,
    })

    const dispatch = useDispatch()

    const submitEdit = () => {
        dispatch(editTitle({ ...editValue, index }))
        setEdit(false)
    }

    const changeText = (e) => {
        setEditValue((item) => {
            return { ...item, [e.target.name]: e.target.value }
        })
    }

    return (
        <li className={clsx(styles.listItem, active && styles.active)}>
            <label>
                <div className={styles.wrap}>
                    <input type="checkbox" onChange={change} checked={active} />
                    {edit ? (
                        <input
                            type="text"
                            placeholder={children}
                            name="title"
                            onChange={changeText}
                        />
                    ) : (
                        <span>{children}</span>
                    )}
                </div>
            </label>

            <div className={clsx(styles.controls, styles.wrap)}>
                {edit ? (
                    <Button type="circle" click={submitEdit}>
                        <FaCheck />
                    </Button>
                ) : (
                    <Button type="circle" click={() => setEdit(true)}>
                        <FaPencilAlt />
                    </Button>
                )}
                <Button type="circle" click={del}>
                    <FaTrashAlt />
                    <p></p>
                </Button>
            </div>
        </li>
    )
}
