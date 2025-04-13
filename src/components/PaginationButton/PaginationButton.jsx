import React from 'react'
import {GrNext, GrPrevious} from "../index"

export default function PaginationButton({Icon, click, style = "bg-primary-bg text-white mx-1"}) {
  return (
    <button onClick={() => click()} className={`${style} p-3 border-2 border-gray-300 text-lg cursor-pointer`}>
        {Icon === "GrNext" ? <GrNext /> : Icon === "GrPrevious" ? <GrPrevious /> : Icon}
    </button>
  )
}
