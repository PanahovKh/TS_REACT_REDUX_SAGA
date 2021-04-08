import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/users';
import { useTypeSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
    const {users, error, loading} = useTypeSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    },[dispatch])

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div>
            {users.map(user => 
                <div
                    key={user.id}
                    style={{border: '1px solid blue', padding: '3px',fontSize:'2rem'}}
                    >
                        {user.name}
                </div>
                )}
        </div>
    )
}

export default UserList
