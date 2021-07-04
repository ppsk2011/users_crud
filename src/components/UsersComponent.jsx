import React, { useEffect } from 'react';
import Card from './CardComponent'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const errors = useSelector(state => state.users.error);
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <>
        {users && loading && <p>loading...</p>}
            {users  && users.map((user) => (
                <Card user={user} key={user.id} />
            )
            )}
            {users && users.length===0 && !users.loading && <p>There are no users to display</p>}

            {errors && !loading && <p> {errors}</p>}
        </>
    )
}

export default Users;