import React from "react"

function Stripe({ val }) {
    return (
        <div className="w-[16.66%]  px-[2vw] py-[2vw] flex justify-between items-center border-t-[1.4px] border-b-[1.4px] border-r-[1.4px] border-zinc-600 ">
            <img className="h-[3.5vh] sm:h-5" src={val.url} />
            
        </div>
    )
}

export default Stripe
