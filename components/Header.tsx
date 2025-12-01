"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Button from "./Button";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
    const [active, setActive] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => setMenuOpened(!menuOpened);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className = {`fixed top-0 left-0 right-0 w-full bg-white transition-all duration-200 z-50 ${active ? "shadow-lg py-2" : "py-3"}`}>
            <div className = "max_padd_container flexBetween">
                {/* Logo */}
                <Link href = "/" className = "flexCenter">
                    <Image src = "/logo.svg" alt = "logo" width = {133} height = {99} />
                </Link>
                {/* Nav */}
                {/* Deskstop */}
                <Nav containerStyles = "hidden lg:flex gap-x-10 items-start justify-center" linkStyles = "cursor-pointer my-4 relative transition-all" />
                {/* Mobile */}
                <Nav containerStyles = {`flex flex-col items-start justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md w-60 lg:hidden ${menuOpened ? "right-0" : "-right-[100%]"}`} linkStyles = "cursor-pointer my-4 relative transition-all" />
                {/* Icons y buttons */}
                <div className = "flexCenter">
                    <div className = "hidden lg:block">
                        <Button type = "button" title = "Iniciar Sesión" icon = "/user.svg" variant = "btn_secondary_rounded" />
                    </div>
                    {
                        !menuOpened ? (
                            <IoMenu className = "lg:hidden inline-block cursor-pointer regular-24 hover:text-secondary" onClick = {toggleMenu} />
                        ) : (
                            <IoClose className = "lg:hidden inline-block cursor-pointer regular-24 hover:text-secondary" onClick = {toggleMenu} />
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;