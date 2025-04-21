import React from 'react'
import UserStatus from '../UserStatus/UserStatus'

export default function UserInfo({user, id }) {
    return (
        <section className='p-4 border-2 border-gray-400 rounded-2xl flex flex-col gap-2'>
            <h2 className='text-2xl font-medium'>{user?.fullName} Info`</h2>
            <UserStatus id={id} />
            <h3 className='text-xl'>
                <span className='font-medium'>Looking For A Job:</span> {user?.lookingForAJob === true ? "true" : "false"}
            </h3>
            <h3 className='text-xl'>
                <span className='font-medium'>About Me:</span> {user?.aboutMe || "user has not written any information about himself/herself"}
            </h3>
        </section>
    )
}
