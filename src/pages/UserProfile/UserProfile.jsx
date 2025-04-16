import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userThunk } from '../../store/action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import userImage from "../../assets/user.png"
import { SocialAPI } from '../../api/api';
import ProfileAbout from '../../components/ProfileAbout/ProfileAbout';

export default function UserProfile() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userPage);

    const changeProfile = (e) => {
        const files = e.target.files[0];
        SocialAPI.changePhoto(files)
    }

    useEffect(() => {
        dispatch(userThunk(id))
    }, [])

    return (
        <section className='p-30 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src={user?.photos?.large || userImage} className="rounded-full" />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-bold'>{user?.fullName}</h2>
                    {
                        localStorage.getItem("userId") === id
                        && <input
                            type="file"
                            onChange={changeProfile}
                            placeholder=''
                            className='p-2 font-bold bg-gray-300'
                        />
                    }
                </div>
            </div>
            {localStorage.getItem("userId") === id && <ProfileAbout user={user} />}
        </section>
    )
}
