import React from 'react'
import { BiSearch } from 'react-icons/bi';

const Header = () => {
    return (
        <div className="bg-white shadow-md">
            <div className="container mx-auto py-3 px-8 flex justify-between items-center">
                <a href="#" className="font-semibold tracking-wider uppercase">
                    The Movies
                </a>
                <div className="pr-6">
                    <BiSearch size={20} />
                </div>
            </div>
        </div>
    )
}

export default Header