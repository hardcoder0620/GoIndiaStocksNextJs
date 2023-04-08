import Link from 'next/link';
import React from 'react'
import { BiSearch } from "react-icons/bi";

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logoSearch">
                    <Link href="" className='logoLink'>
                        <img src="/images/logo.png" alt="logo image" />
                    </Link>
                    <div className="searchBox">
                        <input type="text" />
                        <button>
                            <BiSearch size={20} color='gray' ></BiSearch>
                        </button>
                    </div>
                </div>
                <div className="loginSec">
                    <Link href="" className='navLink'>
                        Contact Us
                    </Link>
                    <Link href="" className='navLink bor'>
                        Sign Up
                    </Link>
                    <Link href="" className='navLink bor'>
                        Sign In
                    </Link>
                    <Link href="" className='userLink'>
                        <img src="/images/user.png" alt="user image" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}
