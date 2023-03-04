import { AddToDoForm } from './containers/AddToDoForm'
import { useState } from 'react'
import './App.css'
import { Header } from './containers/Header'
import { TasksList } from './containers/TasksList'

function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <AddToDoForm />
                <TasksList />
            </div>
        </>
    )
}

export default App
