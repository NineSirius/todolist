import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/UI/Button'
import styles from './AddToDoForm.module.css'
import { addToDoList } from '../../store/reducers/list.reducer'

export const AddToDoForm = () => {
    const [toDo, setTodo] = useState({
        title: '',
        status: false,
    })

    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        dispatch(addToDoList(toDo))
    }

    const change = (e) => {
        setTodo((toDo) => {
            return { ...toDo, [event.target.name]: event.target.value }
        })
    }

    return (
        <form onSubmit={submit}>
            <div className={styles.form}>
                <label>
                    <div className={styles.formItem}>
                        <input
                            type="text"
                            className={styles.input}
                            name="title"
                            onChange={change}
                            maxLength="32"
                            required
                        />
                        <span>Название задачи</span>
                    </div>
                </label>

                <div></div>

                <Button type="success">Отправить</Button>
            </div>
        </form>
    )
}
