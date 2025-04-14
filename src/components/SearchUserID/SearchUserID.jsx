import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchUserThunk } from '../../store/action/searchAction';
import { GoSearch } from 'react-icons/go';

export default function SearchUserID() {
    const [searchUserId, setSearchUserId] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(searchUserThunk(searchUserId))
    }

    return (
        <form className='relative flex items-center' onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
            <input
                type="number"
                value={searchUserId}
                onChange={(e) => setSearchUserId(e.target.value)}
                className="w-[250px] bg-gray-200 p-2 rounded-2xl no-spinner"
                placeholder="Search by user ID"
            />
            <GoSearch
                onClick={handleSubmit}
                className='absolute right-2 text-xl text-gray-500 cursor-pointer'
            />
        </form>
    )
}
