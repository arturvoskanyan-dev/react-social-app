import React from 'react'
import { SocialAPI } from '../../api/api';
import { ChangeProfile, MdPhotoCamera, ProfileAbout, FollowButton, userImage } from "../../pages/index"

export default function ProfileHeader({ user, id }) {
    const changeProfile = (e) => {
        const files = e.target.files[0];
        SocialAPI.changePhoto(files)
    }

    return (
        <section className="flex items-center justify-between">
            <div className='flex items-center gap-4 relative'>
                <img src={user?.photos?.large || userImage} className="w-[250px] rounded-full" />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-bold'>{user?.fullName}</h2>
                    <div className='absolute bottom-16'>
                        <ProfileAbout user={user} />
                    </div>
                    {
                        localStorage.getItem("userId") === id
                        && <label className="absolute right-28 bottom-10" >
                            <MdPhotoCamera className='p-2 text-5xl bg-gray-300 rounded-full cursor-pointer' />
                            <input type="file" hidden onChange={changeProfile} />
                        </label>
                    }
                </div>
            </div>
            {localStorage.getItem("userId") === id ? <ChangeProfile user={user} /> : <FollowButton id={id} />}
        </section>
    )
}
