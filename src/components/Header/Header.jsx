import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { GrHomeRounded, LuUsers, GoSearch } from "../index"
import { NavLink } from 'react-router-dom'
import { searchUserThunk } from '../../store/action/searchAction'
import { useDispatch } from 'react-redux'

export default function Header() {
    const [searchUserId, setSearchUserId] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(searchUserThunk(searchUserId))
    }

    return (
        <header className="flex justify-between items-center bg-white fixed top-0 left-0 right-0">
            <div className="flex items-center">
                <img src={logo} className="w-[100px]" />
                <form className='relative flex items-center' onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
                    <input
                        type="number"
                        value={searchUserId}
                        onChange={(e) => setSearchUserId(e.target.value)}
                        className="w-[250px] bg-gray-200 p-2 rounded-2xl no-spinner"
                        placeholder="Search by user ID"
                    />
                    <GoSearch 
                        onClick={handleSubmit}
                        className='absolute right-2 text-xl text-gray-500 cursor-pointer' 
                    />
                </form>
            </div>
            <div className="flex items-center gap-12">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    <span className="icon">
                        <GrHomeRounded className="text-3xl" />
                    </span>
                </NavLink>
                <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>
                    <span className="icon">
                        <LuUsers className="text-3xl" />
                    </span>
                </NavLink>
            </div>
            <div>
                <h2>My Profile</h2>
            </div>
        </header>
    )
}
