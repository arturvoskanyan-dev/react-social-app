import React from 'react'
import { NavLink } from 'react-router-dom'
import {GrHomeRounded, LuUsers} from "../index"

export default function HeaderIcons() {
    return (
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
    )
}
