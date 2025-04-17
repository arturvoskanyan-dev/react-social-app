import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { userThunk } from '../../store/action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import userImage from "../../assets/user.png"
import { SocialAPI } from '../../api/api';
import ProfileAbout from '../../components/ProfileAbout/ProfileAbout';
import { MdPhotoCamera } from "react-icons/md";

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
        <section className="p-30 flex items-center justify-between">
            <div className='flex items-center gap-4 relative'>
                <img src={user?.photos?.large || userImage} className="rounded-full" />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-bold'>{user?.fullName}</h2>
                    {
                        localStorage.getItem("userId") === id
                        && <label className="absolute right-28 bottom-10">
                            <MdPhotoCamera className='p-3 text-6xl bg-gray-300 rounded-full cursor-pointer' />
                            <input type="file" hidden />
                        </label>

                    }
                </div>
            </div>
            {localStorage.getItem("userId") === id && <ProfileAbout user={user} />}
        </section>
    )
}
