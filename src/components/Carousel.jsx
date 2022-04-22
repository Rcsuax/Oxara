import React from "react"

import NextSVG from "../images/next.svg"
import NextBackSVG from "../images/next-1.svg"

const Carousel = ({ children }) => {
    return (
        <div className="mx-10 mb-5">
            <div className="flex justify-between">
                <h2 className="font-gilroy text-3xl">Latest Recipes</h2>
                
                <div className="flex flex-row">
                    <img className="mx-5" src={NextBackSVG} />
                    <img src={NextSVG} />
                </div>

            </div>

            <div className="flex flex-row">
                { children }
            </div>
        </div>
    )
}

export default Carousel