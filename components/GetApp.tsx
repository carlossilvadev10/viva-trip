import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
    return (
        <section className = "flexCenter w-full" id = "downloads">
            <div className = "flex flex-col sm:flex-row justify-between w-full max-container px-6 lg:px-20 py-12 sm:py-20 relative gap-16 sm:gap-12 xl:max-h-[598px] 2xl:rounded-5xl overflow-hidden">
                <div className = "flex flex-1 flex-col items-start justify-center gap-4 xl:max-w-[600px] w-full z-20">
                    <h2 className = "bold-40 lg:bold-64">
                        ¡Descarga nuestra app hoy!
                    </h2>
                    <h4 className = "uppercase medium-16 text-secondary">
                        Disponible para iOS y Android
                    </h4>
                    <p className = "">
                        Planifica tus viajes, gestiona reservas y descubre experiencias únicas desde la palma de tu mano.
                    </p>
                    <div className = "flex flex-col xl:flex-row gap-4 mt-2 w-full whitespace-nowrap">
                        <Button type = "button" title = "App Store" icon = "/apple.svg" variant = "btn_dark_rounded !px-12 !py-4" />
                        <Button type = "button" title = "Google Play Store" icon = "/Android.svg" variant = "btn_secondary_rounded !px-12 !py-4" />
                    </div>
                </div>
                <div className = "flex flex-1 items-center justify-end">
                    <Image src = "/phones.png" alt = "phone" width = {550} height = {870} />
                </div>
            </div>
        </section>
    )
}

export default GetApp;