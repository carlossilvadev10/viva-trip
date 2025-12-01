import React from "react";
import { Link } from "react-scroll";
import { links } from "@/constant";

type NavProps = {
    containerStyles: string;
    linkStyles: string;
}

const Nav = ({ containerStyles, linkStyles }: NavProps) => {
    return (
        <nav className = {`${containerStyles}`}>
            {
                links.map((link, i) => (
                    <Link key = {i} to = {link.path} offset = {link.offset} spy = {true} smooth = {true} duration = {300} activeClass = "active" className = {`${linkStyles}`}>
                        {link.title}
                    </Link>
                ))
            }
        </nav>
    )
}

export default Nav;