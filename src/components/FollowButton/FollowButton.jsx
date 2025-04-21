import React from 'react'
import { useDispatch } from 'react-redux'
import { setFollowThunk } from '../../store/action/followAction';

export default function FollowButton({ id }) {
    const dispatch = useDispatch();

    const follow = (id) => {
        dispatch(setFollowThunk(id))
    }

    return (
        <button
            onClick={() => follow(id)}
            className="bg-primary-bg w-[200px] p-2 text-white font-medium rounded-xl cursor-pointer
        hover:bg-blue-700"
        >
            Follow
        </button>
    )
}
