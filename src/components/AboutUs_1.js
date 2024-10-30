import React from "react";

function AboutUs() {
    return (
        <section id="about-us" className="bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2 lg:w-1/3 px-6 mt-10">
                    <img src="asset/dus nw.jpg" alt="Dus" className="max-w-full h-auto mx-auto rounded-2xl"/>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 px-6">
                    <h1 className="text-blue-600 font-bold text-2xl lg:text-3xl mb-4 lg:mb-6">
                        PT MENJANGAN ENAM TRADING AND DISTRIBUTION
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl mb-4 lg:mb-6 text-black">
                        Merupakan suatu perusahaan yang bergerak di bidang trading dan distribusi produk kesehatan yang berkualitas dan tentunya terpercaya.
                    </p>
                    <p className="text-base md:text-lg lg:text-xl-lg text-black">
                        Kami juga turut serta dalam membangun kesehatan bangsa.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
}

export default AboutUs;