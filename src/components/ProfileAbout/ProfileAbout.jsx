import React, { useState } from 'react'
import { FaRegEdit, GrLogout, ProfileEditForm } from '../index';
import { SocialAPI } from '../../api/api';
import { logOutAC } from '../../store/action/authAction';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function ProfileAbout({ user }) {
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
                <GrLogout className='absolute left-3 text-white'/>
                <button onClick={logout} className='w-[250px] bg-red-500 text-white p-2 rounded-xl cursor-pointer'>Log Out</button>
            </NavLink>
            {
                popUp
                && <div className="fixed inset-0 z-50" onClick={() => setPopUp(false)}>
                    <div
                        className="w-4xl max-h-[600px] overflow-y-scroll absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-lg z-20"
                        onClick={(e) => e.stopPropagation()}>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-2xl text-center font-medium'>Edit Your Profile</h2>
                            <div className='border-b-2 border-gray-500'></div>
                            <div className='flex justify-between gap-4'>
                                <ProfileEditForm profile={user} setPopUp={setPopUp} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}
