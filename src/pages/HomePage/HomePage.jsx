import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

export default function HomePage() {
    const { userId } = useSelector((state) => state.auth);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        if (userId) {
            localStorage.setItem("userId", userId?.userId);
            setRedirect(userId);
        } 
    }, [userId]);

    if (redirect) {
        return <Navigate to={`/user/${redirect.userId}`} />;
    }

    return (
        <main className='p-30'>
            <LoginPage />
        </main>
    )
}
