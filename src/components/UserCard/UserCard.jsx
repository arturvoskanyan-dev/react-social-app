import React from 'react'
import { NavLink } from 'react-router-dom'
import {FollowButton, userImage} from "../index"

export default function UserCard({ user }) {
  return (
    <section className="flex flex-wrap flex-col items-center gap-4 p-2.5 shadow-2xl border-2 border-gray-300 rounded-2xl">
      <NavLink to={`/user/${user.id}`}>
        <img src={user?.photos?.large || userImage} className="w-[225px]" />
      </NavLink>
      <h2 className="max-w-[180px] text-lg font-bold truncate">{user?.name}</h2>
      {localStorage.getItem("userId") != user?.id && <FollowButton id={user?.id} />}
    </section>
  )
}
