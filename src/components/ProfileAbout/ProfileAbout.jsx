import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';
import { GrLogout } from "react-icons/gr";

export default function ProfileAbout({ user }) {
    const [popUp, setPopUp] = useState(false);

    const logout = () => {
        localStorage.removeItem("userId")
    }

    return (
        <section className='py-12'>
            <div className='relative flex items-center'>
                <FaRegEdit className='absolute left-3 text-xl text-white' />
                <button
                    onClick={() => setPopUp(!popUp)}
                    className='w-[250px] p-2 bg-primary-bg text-white text-xl rounded-2xl cursor-pointer'
                >
                    Edit your profile
                </button>
            </div>
            <div className='relative flex items-center'>
                <GrLogout className='absolute left-3 text-xl text-white' />
                <button onClick={logout} className='w-[250px] bg-red-500 text-white p-2 rounded-xl'>Log Out</button>
            </div>
            {
                popUp
                && <div className="fixed inset-0 z-10" onClick={() => setPopUp(false)}>
                    <div
                        className="w-4xl max-h-[600px] overflow-y-scroll absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 rounded shadow-lg z-20"
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
