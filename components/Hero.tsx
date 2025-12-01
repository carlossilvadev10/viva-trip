import React from "react";
import { MdLocationPin } from "react-icons/md";

const Hero = () => {
    return (
        <section className = "flexCenter max_padd_container w-full relative" id = "home">
            <div className = "absolute w-full h-full bg-[#2f6a7f2f] top-0 bottom-0 z-10" />
            <video src = "./video.mp4" muted autoPlay loop className = "absolute h-full w-full top-0 bottom-0 object-cover" />
            {/* Content */}
            <div className = "flex flex-col justify-center gap-y-3 m-auto w-full h-max pt-28 lg:pt-64 pb-12 lg:pb-24 z-20">
                <div className = "px-0 py-8 text-white text-center lg:text-left">
                    <span className = "uppercase regular-18">Descubre el mundo sin límites</span>
                    <h2 className = "h2 max-w-[777px]">
                        Vive experiencias inolvidables en cada destino
                    </h2>
                </div>
                {/* Form */}
                <div className = "">
                    <div className = "text-center">
                        <span className = "bg-white text-tertiary medium-16 px-12 py-4 rounded-l-xl rounded-r-xl">Encuentra tu próxima aventura</span>
                    </div>
                    <div className = "flex flex-col md:flex-row gap-6 px-8 py-10 md:px-12 bg-white rounded-xl">
                        <div className = "flex flex-col w-full xl:px-6">
                            <label htmlFor = "city" className = "block text-gray-50 pb-2">
                                Explora tu próximo destino:
                            </label>
                            <div className = "flexCenter h-10 px-4 bg-primary rounded-full w-full">
                                <input type = "text" name = "city" id = "city" placeholder = "Ingresa el nombre aquí..." className = "bg-transparent border-none outline-none w-full regular-14" />
                                <MdLocationPin className = "text-lg" />
                            </div>
                        </div>
                        <div className = "flex flex-col w-full xl:px-6">
                            <label htmlFor = "date" className = "block text-gray-50 pb-2">
                                Selecciona tu fecha
                            </label>
                            <div className = "flexCenter h-10 px-4 bg-primary rounded-full w-full">
                                <input type = "date" name = "date" id = "date" className = "bg-transparent border-none outline-none w-full regular-14" />
                            </div>
                        </div>
                        <div className = "flex flex-col w-full xl:px-6">
                            <div className = "flexBetween items-center">
                                <label htmlFor = "price" className = "block text-gray-50 pb-2">
                                    Precio máx:
                                </label>
                                <h4>
                                    S/. 20 000
                                </h4>
                            </div>
                            <div className = "flexCenter h-10 px-4 bg-primary rounded-full w-full">
                                <input type = "range" name = "price" id = "price" min = "1000" max = "20000" className = "border-none outline-none w-full regular-14" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;