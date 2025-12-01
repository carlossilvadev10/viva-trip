import Image from "next/image";
import React from "react";

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon: string;
    variant: string;
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
    return (
        <button type = {type} className = {`flexCenter gap-2 border rounded-full ${variant}`}>
            {
                icon && <Image src = {icon} alt = {title} width = {20} height = {20} />
            }
            <label htmlFor = "" className = "whitespace-nowrap cursor-pointer bold-16">
                {title}
            </label>
        </button>
    )
}

export default Button;