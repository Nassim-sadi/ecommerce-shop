import React from "react"
import "./navbar.scss"
import Link from "next/link"
export default function Navbar() {
    return (
        <nav>
            <p>Logo</p>
            <ul>
                <li><a href="/">Home</a></li>
                <Link href={"/profile"} >Go to profile</Link>
                <Link href={"/signup"} >Sign up</Link>
                <Link href={"/login"}>Login</Link>
            </ul>
        </nav>
    )
}