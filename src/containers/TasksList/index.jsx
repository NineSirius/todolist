import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToTrashList, changeToDo, removeToDo } from '../../store/reducers/list.reducer'
import { ListItem } from './ListItem'
import styles from './TasksList.module.css'

export const TasksList = () => {
    const dispatch = useDispatch()

    const change = (item, index) => {
        dispatch(
            changeToDo({
                item: item,
                index: index,
            }),
        )
    }

    const TrashBasket = useSelector((store) => {
        return store.TrashList
    })

    const ToDoList = useSelector((store) => {
        return store.ToDoList
    })

    const deleteTask = (index) => {
        console.log(index)
        dispatch(AddToTrashList(ToDoList[index].payload))
        dispatch(removeToDo(index))
    }

    return (
        <ul className={styles.list}>
            {ToDoList.map((item, index) => {
                return (
                    <ListItem
                        key={index}
                        active={item.payload.status}
                        change={() => change(item, index)}
                        del={() => deleteTask(index)}
                        index={index}
                    >
                        {item.payload.title}
                    </ListItem>
                )
            })}
        </ul>
    )
}
