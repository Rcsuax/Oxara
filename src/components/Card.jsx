import React from "react"

const Card = ({text, img}) => {
    
    return (    
        <div className="flex flex-row items-center border border-gray-200 shadow-md">

            <img class="object-cover rounded-full" src={img}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="font-gilroy"> { text } </p>
            </div>

        </div>
    )
}


export default Card