import React from "react"
import { Link } from "gatsby"


const Navbar = () => {
    return (
        <nav className="flex items-center">
            
            <div className="w-2/5 pl-[200px]">
                <Link className="font-krona" to="/">
                    <h1 className="text-4xl">Zecco</h1>
                    <p>organic farm</p>
                </Link>
            </div>
            
            <div className="w-3/5">
                
                <ul className="flex justify-start">
                    <li className="mx-4">
                        <Link to="/recipes">Recipe Box</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/about">About Us</Link>
                    </li>

                    <li className="mr-4">
                        <Link to="/visit">Visit Us</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}


export default Navbar