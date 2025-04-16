import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

export default function HomePage() {
    const { userId } = useSelector((state) => state.auth);

    useEffect(() => {
        if(userId) {
            localStorage.setItem("userId", userId?.userId)
        }
    }, [userId])

    if(localStorage.getItem("userId")) {
        return <Navigate to={`user/${localStorage.getItem("userId")}`} />
    }

    return (
        <main className='p-30'>
            <LoginPage />
        </main>
    )
}
