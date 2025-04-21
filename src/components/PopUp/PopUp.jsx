import React from 'react'
import {ProfileEditForm, IoIosCloseCircleOutline} from "../index"

export default function PopUp({user, setPopUp}) {
    return (
        <section className="fixed inset-0 z-50" onClick={() => setPopUp(false)}>
            <div
                className="w-4xl max-h-[600px] overflow-y-scroll absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-lg z-20"
                onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl text-center font-medium flex-1/2'>Edit Your Profile</h2>
                        <IoIosCloseCircleOutline
                            onClick={() => setPopUp(false)}
                            className='p-2 text-5xl bg-gray-300 text-gray-600 cursor-pointer rounded-full'
                        />
                    </div>
                    <div className='border-b-2 border-gray-500'></div>
                    <div className='flex justify-between gap-4'>
                        <ProfileEditForm profile={user} setPopUp={setPopUp} />
                    </div>
                </div>
            </div>
        </section>
    )
}
