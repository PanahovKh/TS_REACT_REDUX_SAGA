import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { fetchTodos, setTodoPage } from '../store/action-creators/todo'


export const TodoList = () => {
    const {page, error,loading, todos, limit} = useTypeSelector(state => state.todo)
    const dispatch = useDispatch()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        dispatch(fetchTodos(page, limit))
    },[page])


    if(loading) {
        return <h1>Идет загрузка...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    

    return (
        <div>
            {todos.map(todo => 
                <div style={{padding:'3px', fontSize:'1.3rem'}} key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: 'flex'}}>
                {
                    pages.map(p => 
                        <div 
                            onClick={() => dispatch(setTodoPage(p)) }
                            style={{border:p === page ? '2px solid green': '1px solid grey', padding: 10}}>
                            {p}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TodoList