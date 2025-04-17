import React from 'react'
import {FaFacebook, FaGithub, FaSquareInstagram, FaVk, FaTwitter, FaYoutube} from "../index"

export default function ProfileAbout({ user }) {
  const data = [
    { name: "facebook", icon: <FaFacebook /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaSquareInstagram /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "vk", icon: <FaVk /> },
    { name: "youtube", icon: <FaYoutube /> },
  ]

  return (
    <section>
      <div className='flex gap-2'>
        {
          data.map((d) => {
            return user?.contacts?.[d.name] !== null &&
              <a href={user?.contacts?.[d.name]} target='_blank' key={d.name} className='social_icons duration-200'>
                <span className='text-3xl'>{d.icon}</span>
              </a>
          })
        }
      </div>
    </section>
  )
}
