import React from "react"
import { IoIosReturnRight } from "react-icons/io"

const Button = ({ title = "Sign in" }) => {
    return (
        <div className="w-[10vw] text-center  overflow-hidden px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
            <span className="text-[10px] font-semibold sm:text-sm ms:font-medium">{title}</span>
            <IoIosReturnRight />
        </div>
    )
}

export default Button
