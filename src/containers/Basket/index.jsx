import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/UI/Button'
import { Drawer } from '../../components/UI/Drawer'
import {
    addToDoList,
    removeTrashList,
    resetTrashList,
    returnAll,
} from '../../store/reducers/list.reducer'

import styles from './Basket.module.css'
import { BasketItem } from './BasketItem'

export const Basket = () => {
    const [isVisible, setIsVisible] = useState(false)

    const TrashList = useSelector((store) => {
        return store.TrashList
    })

    const ToDoList = useSelector((store) => {
        return store.ToDoList
    })

    const dispatch = useDispatch()

    const openDrawer = () => {
        setIsVisible(true)
    }

    const closeDrawer = () => {
        setIsVisible(false)
    }

    const returnToDo = (index) => {
        dispatch(addToDoList(TrashList[index].payload))
        dispatch(removeTrashList(index))
    }

    const resetTrash = () => {
        dispatch(resetTrashList())
    }

    const returnALlTasks = () => {
        dispatch(returnAll())
    }

    return (
        <>
            <Button type="circle" click={openDrawer}>
                <FaTrashAlt />
                {TrashList.length > 0 && (
                    <span className={styles.trashCounter}>{TrashList.length}</span>
                )}
            </Button>

            <Drawer show={isVisible} close={closeDrawer}>
                <h2>Корзина</h2>
                <ul className={styles.list}>
                    {TrashList.length > 0 ? (
                        TrashList.map((item, index) => {
                            return (
                                <BasketItem click={() => returnToDo(index)}>
                                    {item.payload.title}
                                </BasketItem>
                            )
                        })
                    ) : (
                        <h2>Пока что пусто</h2>
                    )}
                </ul>

                <div className={styles.controls}>
                    <Button type="success" click={resetTrash}>
                        Очистить
                    </Button>
                    <Button type="success" click={returnALlTasks}>
                        Вернуть все задачи
                    </Button>
                </div>
            </Drawer>
        </>
    )
}
