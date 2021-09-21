import React from "react";
import {Todo} from "./Components/Todo";

const App = () => {

    const [userInput, setUserInput] = React.useState('')
    const [todos, setTodos] = React.useState([])


    const addTask = () => {
        if(userInput){
        const newTask = {
            id: Math.floor(Math.random()*1000),
            task: userInput,
            isComplete: false
        }
        setTodos([...todos, newTask])
    }}


    const changeInput = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserInput('')
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const toggleTask = (id) => {
        setTodos([...todos.map((todo) =>
        todo.id === id ? {...todo, isComplete: !todo.isComplete} : {...todo}
        )])
    }


    return (
        <div className='container'>
            <h1>Список задач: {todos.length}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Введите значение..." onChange={changeInput} value={userInput} >
                </input>
                <button onClick={addTask}>Сохранить</button>
            </form>
            {todos.map((todo) => {
                return <div><br/><Todo

                    key={todo.id}
                    todo={todo}
                    removeTask={removeTask}
                    toggleTask={toggleTask}/></div>
            })}
            <footer>Спасибо за просмотр моего проекта:)</footer>
        </div>
    );
}

export default App;
