import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { FaSquareCheck } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { changeStatusThunk } from '../../store/action/userAction';

export default function UserStatus({ userStatus, user, id }) {
    const [edit, setEdit] = useState(false);
    const [myStatus, setMyStatus] = useState(userStatus);
    const dispatch = useDispatch();

    const changeStatus = () => {
        setEdit(false)
        dispatch(changeStatusThunk(myStatus))
    }

    return (
        <section className='p-4 border-2 border-gray-400 rounded-2xl'>
            <h2 className='text-2xl font-medium'>{user?.fullName} Info`</h2>
            <div className='text-xl flex items-center gap-2'>
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
            </div>
        </section>
    )
}
