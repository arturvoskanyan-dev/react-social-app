import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStatusThunk, userThunk } from '../../store/action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { UserInfo, ProfileHeader } from "../index"

export default function UserProfile() {
    const { user } = useSelector((state) => state.userPage);
    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userThunk(id))
        dispatch(getStatusThunk(id))
    }, [id])

    return (
        <section className='p-30 flex flex-col gap-6'>
            <ProfileHeader user={user} id={id} />
            <UserInfo user={user} id={id} />
        </section>
    )
}
