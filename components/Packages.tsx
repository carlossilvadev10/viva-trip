import React from "react";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/constant";
import { RiMapPinLine, RiTimeLine } from "react-icons/ri";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

type PackageItemProps = {
    title: string;
    location: string;
    price: string;
    URL: string;
    des: string;
    rating: string;
    duration: string;
}

const PackageItem = ({ title, location, price, URL, des, rating, duration }: PackageItemProps) => {
    return (
        <div className = "overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-200 group">
            <Link href = "/" className = "overflow-hidden relative">
                <Image src = {URL} alt = {`img${title}`} height = {366} width = {640} className = "group-hover:scale-105 transition-all duration-300" />
                <span className = "bold-16 text-white bg-tertiary absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-8 py-2 rounded-full group-hover:bg-secondary transition-all duration-300">S/. {price}</span>
            </Link>
            <div className = "p-4 bg-white">
                <div className = "medium-22">
                    <span className = "">
                        {title}
                    </span>
                    <div className = "flex items-center gap-x-2 my-1 text-gray-50">
                        <RiMapPinLine />
                        <span className = "regular-16 capitalize">
                            {location}
                        </span>
                    </div>
                </div>
                <hr className = "my-2" />
                <p className = "my-3">
                    {des}
                </p>
                <hr className = "my-2" />
                <div className = "flexBetween">
                    <div className = "flexCenter gap-x-4">
                        <div className = "flexCenter gap-x-1 text-secondary">
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarHalfFilled />
                        </div>
                        <span className = "medium-16">
                            {rating}
                        </span>
                    </div>
                    <div className = "flexStart gap-2 text-gray-50">
                        <RiTimeLine className = "text-lg" />
                        <span className = "medium-16">
                            {duration}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Packages = () => {
    return (
        <section className = "max_padd_container py-16 xl:py-28 bg-slate-10" id = "listing">
            <div className = "mx-4 text-center lg:text-left">
                <h4 className = "uppercase bold-18 text-secondary">
                    Paquetes turísticos exclusivos
                </h4>
                <h3 className = "h3 capitalize lg:max-w-lg">
                    Descubre los destinos más extraordinarios del mundo
                </h3>
                <p className = "lg:max-w-lg">
                    Experiencias cuidadosamente diseñadas que combinan cultura, historia y paisajes inolvidables. Cada paquete incluye alojamiento, transporte y guías expertos para que solo te preocupes por disfrutar.
                </p>
            </div>
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 mx-4">
                {
                    packages.map((pkg, i) => (
                        <PackageItem key = {i} title = {pkg.title} location = {pkg.location} price = {pkg.price} URL = {pkg.URL} des = {pkg.des} rating = {pkg.rating} duration = {pkg.duration} />
                    ))
                }
            </div>
        </section>
    )
}

export default Packages;