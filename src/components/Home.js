import React from "react";

export default function Home() {
    return (
        <section id="home" className="bg-primary min-h-screen flex items-center relative py-10">
        <div className="container mx-auto px-6 flex flex-wrap md:flex-row items-center justify-center">
            <div className="w-full md:w-3/5 text-center md:text-left px-4 md:px-8 lg:px-12">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white">Selamat datang di</p>
                <h1 className="my-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    PT MENJANGAN ENAM TRADING AND <span className="text-yellow-400">DISTRIBUTION</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white">
                    Merupakan suatu perusahaan trading dan distribusi produk kesehatan yang terpercaya dan berkualitas
                </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end px-4 mt-6 md:mt-0">
            <svg width="400" height="400" viewBox="0 0 430 450" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H330C385.228 0 430 44.7715 430 100V450H100C44.7715 450 0 405.228 0 350V0Z" fill="#D9D9D9"/>
    <path d="M0 0H330C385.228 0 430 44.7715 430 100V450H100C44.7715 450 0 405.228 0 350V0Z" fill="url(#pattern0_189_1552)"/>
    <defs>
        <pattern id="pattern0_189_1552" patternContentUnits="objectBoundingBox" width="1" height="1">
            <image href="asset/dus nw.jpg" width="1" height="1" alt="Dus"/>
        </pattern>
    </defs>
</svg>

            </div>
        </div>
    </section>
    );
}

// export default Home;