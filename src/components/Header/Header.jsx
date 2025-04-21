import React from 'react'
import logo from "../../assets/logo.png"
import { SearchUser, HeaderIcons, userImage } from "../index"

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-white fixed top-0 left-0 right-0 z-50 w-full">
            <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src={logo} className="w-[80px]" />
                    <SearchUser />
                </div>
                <HeaderIcons />
                <div className="flex items-center gap-4">
                    <img src={userImage} className='w-12 h-12 rounded-full object-cover' />
                </div>
            </div>
        </header>
    )
}
