"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { featured } from "@/constant";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const PrevArrow = (props: any) => {
    const {onClick} = props;

    return (
        <div className = "bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5 hover:bg-primary" onClick = {onClick}>
            <RiArrowLeftLine />
        </div>
    )
}

const NextArrow = (props: any) => {
    const {onClick} = props;

    return (
        <div className = "bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5 hover:bg-primary" onClick = {onClick}>
            <RiArrowRightLine />
        </div>
    )
}

const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}

type FeatureItemProps = {
    title: string;
    URL: string;
    des: string;
}

const FeatureItem = ({ title, URL, des }: FeatureItemProps) => {
    return (
        <div className = "mx-4 overflow-hidden group">
            <Link href = "/" className = "overflow-hidden relative">
                <div className = "">
                    <Image src = {URL} alt = {`img${title}`} width = {510} height = {600} className = "hover:scale-105 transition-all duration-300" />
                </div>
                <h4 className = "capitalize regular-22 absolute top-6 left-4 text-white bg-tertiary px-2 py-1 rounded-md">
                    {title}
                </h4>
                <p className = "regular-18 absolute bottom-6 right-0 bg-tertiary text-white px-4 py-2 rounded-l-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300">
                    {des}
                </p>
            </Link>
        </div>
    )
}

const Feature = () => {
    return (
        <section className = "max_padd_container py-20 xl:py-32 bg-white" id = "feature">
            <div className = "m-auto">
                <div className = "mx-4 text-center lg:text-left">
                    <h4 className = "uppercase bold-18 text-secondary">
                        Los mejores destinos
                    </h4>
                    <h3 className = "h3 capitalize lg:max-w-lg">
                        Vive experiencias únicas en cada rincón
                    </h3>
                    <p className = "lg:max-w-lg">
                        Cada destino cuenta una historia diferente y te invita a sumergirte en culturas fascinantes, paisajes impresionantes y aventuras que recordarás para siempre.
                    </p>
                </div>
                <div className = "mt-6">
                    <Slider {...settings}>
                        {
                            featured.map((feature, i) => (
                                <FeatureItem key = {i} title = {feature.title} URL = {feature.URL} des = {feature.des} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Feature;