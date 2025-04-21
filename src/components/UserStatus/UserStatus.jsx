import React, { useEffect, useState } from 'react'
import {MdEdit, FaSquareCheck} from "../index"
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusThunk } from '../../store/action/userAction';

export default function UserStatus({ id }) {
    const {userStatus} = useSelector((state) => state.userPage);
    const [edit, setEdit] = useState(false);
    const [myStatus, setMyStatus] = useState(userStatus);
    const dispatch = useDispatch();

    const changeStatus = () => {
        setEdit(false)
        dispatch(changeStatusThunk(myStatus))
    }

    useEffect(() => {
        setMyStatus(userStatus || "")
    }, [userStatus])

    return (
        <section className='text-xl flex items-center gap-2'>
            <span className='font-medium'>Status: </span>
            {
                localStorage.getItem("userId") === id
                    ?
                    edit
                        ? <>
                            <textarea
                                autoFocus
                                maxLength="300"
                                value={myStatus}
                                placeholder='Your Status'
                                onChange={(e) => setMyStatus(e.target.value)}
                                className='w-full max-h-[150px] min-h-[50px] p-1 border-2 border-gray-400 rounded-sm' /
                            >
                            <FaSquareCheck
                                onClick={changeStatus}
                                className='text-2xl font-bold cursor-pointer'
                            />
                        </>
                        : <>
                            {userStatus || "This user has not posted a status."}
                            < MdEdit
                                onClick={() => setEdit(true)}
                                className='text-2xl font-bold cursor-pointer' />
                        </>

                    : <span>{userStatus || "This user has not posted a status."}</span>
            }
        </section>
    )
}
