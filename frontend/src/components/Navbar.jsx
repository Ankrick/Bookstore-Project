import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center p-5 bg-stone-200">
            <div>
                <Link to='/' className="font-bold text-2xl text-green-600  hover:text-green-400">Paradise</Link>
            </div>
            <ul className="flex space-x-10">
                <li><Link to ="/" className="hover:text-green-400">Home</Link></li>
                <li><Link to ="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
        </nav>
    )
}
