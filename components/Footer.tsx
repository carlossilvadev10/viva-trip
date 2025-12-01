import React, { ReactNode } from "react";
import { footerContactInfo, footerLinks, socials } from "@/constant";
import Link from "next/link";
import Image from "next/image";

type FooterColumnProps = {
    title: string;
    children: ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className = "flex flex-col gap-4">
            <h4 className = "bold-18 whitespace-nowrap">
                {title}
            </h4>
            {children}
        </div>
    )
}

const Footer = () => {
    return (
        <footer className = "flexCenter py-16 bg-pattern bg-cover bg-center bg-no-repeat">
            <div className = "flex flex-col rounded-xl w-full max-w-6xl px-4">
                <div className = "flex flex-col md:flex-row items-start justify-center p-8 gap-[10%] bg-primary rounded-t-xl">
                    <div className = "flex flex-wrap gap-6 sm:justify-between md:flex-1">
                        {
                            footerLinks.map((col, i) => (
                                <FooterColumn key = {i} title = {col.title}>
                                    <ul className = "flex flex-col gap-4 regular-14 text-gray-20">
                                        {col.links.map((link, i) => (
                                            <Link href = "/" key = {i} className = "hover:text-gray-30 transition-all duration-300">
                                                {link}
                                            </Link>
                                        ))}
                                    </ul>
                                </FooterColumn>
                            ))
                        }
                        <div className = "flex flex-col gap-4">
                            <FooterColumn title = {footerContactInfo.title}>
                                {
                                    footerContactInfo.links.map((link, i) => (
                                        <a key = {i} href = {link.label === "Correo electrónico" ? `mailto:${link.value}` : `tel:${link.value.replace(/\s/g, '')}`} className = "flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 hover:text-gray-30 transition-all duration-300">
                                            <span className = "text-sm text-gray-20">
                                                {link.label}:
                                            </span>
                                            <span className = "medium-14">
                                                {link.value}
                                            </span>
                                        </a>
                                    ))
                                }
                            </FooterColumn>
                        </div>
                        <div className = "flex">
                            <FooterColumn title = {socials.title}>
                                <ul className = "flex gap-4">
                                    {
                                        socials.links.map((link, i) => {
                                            const socialName = link.split('/').pop()?.split('.')[0] || 'social';
                                            return (
                                                <Link href = "/" key = {i} aria-label = {`Visitar ${socialName}`}>
                                                    <Image src = {link} alt = {`Icono de ${socialName}`} width = {22} height = {22} />
                                                </Link>
                                            )
                                        })
                                    }
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
                <p className = "text-center regular-14 bg-secondary text-white py-2 px-8 rounded-b-xl">
                    © {new Date().getFullYear()} VivaTrip. Todos los derechos reservados. Desarrollado por {" "}
                    <a href = "https://github.com/carlozzsilva10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold hover:underline">
                        carlozzsilva10
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;