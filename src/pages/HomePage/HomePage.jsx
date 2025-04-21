import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

export default function HomePage() {
    const { userId } = useSelector((state) => state.auth);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        const storedId = localStorage.getItem("userId");

        if (userId?.userId) {
            localStorage.setItem("userId", userId?.userId);
            setRedirect(userId?.userId);
        } else if (storedId) {
            setRedirect(storedId);
        }
    }, [userId?.userId]);

    if (redirect) {
        return <Navigate to={`/user/${redirect}`} />;
    }

    return (
        <main className='p-30'>
            <LoginPage />
        </main>
    )
}
