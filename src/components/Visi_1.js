import React from "react";

function Visi() {
    return ( 
        <section id="about us" className="bg-white py-10 ">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center">

                <div className="w-full md:w-1/2 lg:w-2/3 px-6">
                    <div>
                      <h1 className="font-semibold text-2xl lg:text-3xl mb-4 lg:mb-6 text-yellow-400">
                        VISI
                      </h1>
                      <p className="md:text-lg lg:text-xl mb-4 lg:mb-6">
                        Menjadiakan perusahaan tranding dan distribusi Produk kesehatan
                        yang terpercaya dan berkualitas serta turut berperan aktif dalam
                        membangun kesehatan bangsa
                      </p>
                    </div>
                    <div className="mt-4">
                      <h1 className="font-semibold text-2xl lg:text-3xl mb-4 lg:mb-6 text-yellow-400">
                        MISI
                      </h1>
                      <ul className="list-disc pl-5 md:text-lg lg:text-xl mb-4 lg:mb-6">
                        <li>Memberikan pelayanan yang prima kepada pelangan.</li>
                        <li>
                          memenuhi permintakaan pasar terhadap produk kesehatan yang
                          berkualitas dengan menerapkan standar Cara Distribusi Obat
                          yang baik (CDOB).
                        </li>
                        <li>
                          Membangun usaha dengan meningkatkan kompetensi dan kualitas
                          serta produktif sumber daya manusia.
                        </li>
                      </ul>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 lg:w-1/3 px-6 mt-10">
                  <img
                    src="asset/dus nw.jpg" alt="menjangan" className="max-w-full h-auto mx-auto rounded-2xl"/>
                </div>
            </div>
        </div>
    </section>
);
}

export default Visi;