import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GoSearch } from 'react-icons/go';
import { searchTextAC, searchUsersThunk } from '../../store/action/searchUsersAction';

export default function SearchUser() {
    const {searchText} = useSelector((state) => state.searchUsers)
    const dispatch = useDispatch();

    const searchUser = (e) => {
        let userName = e.target.value;
        dispatch(searchTextAC(e.target.value))
        dispatch(searchUsersThunk(userName))
    }
    
    return (
        <form className='relative flex items-center' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <input
                type='text'
                value={searchText}
                onChange={searchUser}
                className="w-[250px] bg-gray-200 p-2 rounded-2xl no-spinner"
                placeholder="Search user"
            />
            <GoSearch
                onClick={() => handleSubmit()}
                className='absolute right-2 text-xl text-gray-500 cursor-pointer'
            />
        </form>
    )
}
