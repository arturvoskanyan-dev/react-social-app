import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk } from '../../store/action/usersAction';
import {UserCard, Pagination} from "../index"

export default function UsersPage() {
    const { users, page } = useSelector((state) => state.usersPage)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUsersThunk(page))
    }, [page])

    return (
        <section className="py-25">
            <Pagination dispatch={dispatch} />
            <div className="flex flex-wrap justify-between items-center gap-16 p-4">
                {
                    users?.map((user) => {
                        return <UserCard key={user.id} user={user}  />
                    })
                }
            </div>
        </section>
    )
}
