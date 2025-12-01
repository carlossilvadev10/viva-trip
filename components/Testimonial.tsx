"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { testimonials } from "@/constant";
import { FaQuoteLeft } from "react-icons/fa";
import Accordion from "./Accordion";

type TestimonialItemProps= {
    title: string;
    profession: string;
    URL: string;
    desc: string;
}

const TestimonialItem = ({ title, profession, URL, desc }: TestimonialItemProps) => {
    return (
        <div className = "my-8 rounded-md z-10 text-center xl:text-left">
            <div className = "pb-6 flex flex-col items-center xl:items-start">
                <Image src = {URL} alt = {`Imagen de ${title}`} width = {77} height = {77} className = "rounded-full mb-2" />
                <div>
                    <div className = "medium-20 text-secondary">
                        {title}
                    </div>
                    <div className = "text-gray-20 regular-14">
                        {profession}
                    </div>
                </div>
            </div>
            <span className = "text-3xl flex justify-center xl:justify-start">
                <FaQuoteLeft />
            </span>
            <p className = "max-w-xl pt-3 text-gray-50 mx-auto xl:mx-0">
                {desc}
            </p>
        </div>
    )
}

const Testimonial = () => {
    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    }

    return (
        <section className = "max_padd_container py-16 bg-white relative" id = "testimonials">
            <div className = "grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className = "text-center xl:text-left">
                    <h4 className = "uppercase bold-18 text-secondary">
                        Experiencias inolvidables
                    </h4>
                    <h3 className = "h3 capitalize xl:max-w-lg">
                        Opiniones de nuestros viajeros
                    </h3>
                    <div className = "xl:max-w-[666px]">
                        <Slider {...settings}>
                            {
                                testimonials.map((testimonial, i) => (
                                    <TestimonialItem key = {i} title = {testimonial.title} profession = {testimonial.profession} URL = {testimonial.URL} desc = {testimonial.desc} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
                <div className = "">
                    <Accordion />
                </div>
            </div>
        </section>
    )
}

export default Testimonial;