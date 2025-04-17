import React from 'react'
import logo from "../../assets/logo.png"
import { SearchUserID, HeaderIcons } from "../index"
import user from "../../assets/user.png"

export default function Header() {
    return (
        <header className="flex justify-around items-center bg-white fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center">
                <img src={logo} className="w-[80px]" />
                <SearchUserID />
            </div>
            <HeaderIcons />
            <div>
                <img src={user} className='w-12 mr-4' />
            </div>
        </header>
    )
}
