import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { searchTextAC } from '../../store/action/searchUsersAction';
import userImg from "../../assets/user.png"

export default function SearchBox() {
    const { users } = useSelector((state) => state.searchUsers);
    const dispatch = useDispatch();

    return (
        <section className='fixed top-20 z-50 bg-white shadow-2xl p-4 w-[300px] max-h-[400px] overflow-y-scroll rounded-2xl'>
            <div className='flex flex-col gap-3'>
                {
                    users?.items?.map((user) => {
                        return (
                            <NavLink
                                key={user.id}
                                to={`/user/${user.id}`}
                                onClick={() => dispatch(searchTextAC(""))}
                                className='flex items-center gap-4 hover:bg-gray-200 rounded-2xl'
                            >
                                <img src={user.photos.small || userImg} className='rounded-full w-[50px]' />
                                <h3>{user.name}</h3>
                            </NavLink>
                        )
                    })
                }
                {users?.items?.length > 0 === false && <h2 className='text-xl font-medium'>User Not Found</h2>}
            </div>
        </section>
    )
}
