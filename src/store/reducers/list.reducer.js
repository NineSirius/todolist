import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
    name: 'list',
    initialState: {
        ToDoList: [],
        TrashList: [],
    },
    reducers: {
        addToDoList: (state, action) => {
            state.ToDoList.push(action)
        },
        removeToDo: (state, action) => {
            console.log(action)
            state.ToDoList.splice(action, 1)
        },
        AddToTrashList: (state, action) => {
            state.TrashList.push(action)
        },
        removeTrashList: (state, action) => {
            state.TrashList.splice(action, 1)
        },
        resetTrashList: (state) => {
            state.TrashList = []
        },
        changeToDo: (state, action) => {
            console.log(action.payload.item)
            state.ToDoList.splice(action.payload.index, 1, {
                ...action.payload.item,
                payload: {
                    title: action.payload.item.payload.title,
                    status: !action.payload.item.payload.status,
                },
            })
        },
        returnAll: (state) => {
            if (state.TrashList.length > 0) {
                state.TrashList.forEach((item) => {
                    state.ToDoList.push(item)
                })
                state.TrashList = []
            }
        },
        editTitle: (state, action) => {
            state.ToDoList.splice(action.payload.index, 1, action)
        },
    },
})

export const {
    addToDoList,
    removeToDo,
    AddToTrashList,
    removeTrashList,
    changeToDo,
    resetTrashList,
    returnAll,
    editTitle,
} = listSlice.actions

export default listSlice.reducer
