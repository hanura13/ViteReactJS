import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"
import { useState } from "react"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)


    return (
        <nav className="bg-gray-800 w-full flex py-3 justify-between items-center navbar shadow-md">
            <h1 className="font-poppins text-white cursor-pointer hover:text-amber-500">PT.Cakrawala Samudera Survindo</h1>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-amber-500
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    alt="menu"
                    src={toggle ? close : menu}
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gray-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] text-white
                        ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar