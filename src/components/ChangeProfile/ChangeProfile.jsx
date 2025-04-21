import React, { useState } from 'react'
import { FaRegEdit, GrLogout, PopUp } from '../index';
import { SocialAPI } from '../../api/api';
import { logOutAC } from '../../store/action/authAction';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function ChangeProfile({ user }) {
    const [popUp, setPopUp] = useState(false);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logOutAC())
        SocialAPI.logOut()
        localStorage.removeItem("userId")
    }

    return (
        <section className='py-12 flex flex-col gap-4'>
            <div className='relative flex items-center text-xl'>
                <FaRegEdit className='absolute left-3 text-white' />
                <button
                    onClick={() => setPopUp(!popUp)}
                    className='w-[250px] p-2 bg-primary-bg text-white rounded-2xl cursor-pointer'
                >
                    Edit profile
                </button>
            </div>
            <NavLink to="/" className='relative flex items-center text-xl'>
                <GrLogout className='absolute left-3 text-white' />
                <button onClick={logout} className='w-[250px] bg-red-500 text-white p-2 rounded-xl cursor-pointer'>Log Out</button>
            </NavLink>
            {popUp && <PopUp user={user} setPopUp={setPopUp} />}
        </section>
    )
}
