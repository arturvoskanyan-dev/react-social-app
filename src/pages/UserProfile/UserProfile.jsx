import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userThunk } from '../../store/action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import userImage from "../../assets/user.png"

export default function UserProfile() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.userPage);

    useEffect(() => {
        dispatch(userThunk(id))
    }, [])

    return (
        <section className='p-30 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src={user?.photos?.large || userImage} className="rounded-full" />
                <h2 className='text-xl font-bold'>{user?.fullName}</h2>
            </div>
            <div>
                <button className='bg-primary-bg w-[200px] p-2 text-white font-medium rounded-xl cursor-pointer hover:bg-blue-700'>
                    Follow
                </button>
            </div>
        </section>
    )
}
