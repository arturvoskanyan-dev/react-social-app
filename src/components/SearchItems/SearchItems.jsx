import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { searchTextAC } from '../../store/action/searchUsersAction';
import userImage from "../../assets/user.png"

export default function SearchItems({user}) {
    const dispatch = useDispatch();

    return (
        <NavLink
            key={user.id}
            to={`/user/${user.id}`}
            onClick={() => dispatch(searchTextAC(""))}
            className='flex items-center gap-4 hover:bg-gray-200 rounded-2xl'
        >
            <img src={user.photos.small || userImage} className='rounded-full w-[50px]' />
            <h3>{user.name}</h3>
        </NavLink>
    )
}
