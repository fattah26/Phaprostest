import React from "react";

function Footer() {
    return (  
        <footer className="bg-cyan-100 text-black">
        <div className="container mx-auto py-14 px-6">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-7 md:text-lg lg:text-xl mb-4 lg:mb-6">
                <div className="lg:col-span-4 col-span-12">
                     <p className="font-semibold mt-6">PT Menjangan Enam Trading and Distribution</p>
                     <p>Distribusi produk kesehatan terpercaya dan berkualitas</p>
                     <i className="ri-mail-fill">menamtradis24@gamil.com</i>
                     <i className="ri-phone-fill">0247611455</i>
                </div>
                <div className="lg:col-span-2 md:cols-span-4 col-span-12">
                    <h5 className="tracking-wide font-semibold"> Link Page </h5>
                    
                  <ul>
                    <li> <a href="#" className="hover:text-yellow-400 transition-all duration-500 ease-in-out">home</a></li>
                    <li><a href="#" className="hover:text-yellow-400 transition-all duration-500 ease-in-out">About Us</a></li>
                    <li><a href="#" className="hover:text-yellow-400 transition-all duration-500 ease-in-out">Product</a></li>
                    <li><a href="#" className="hover:text-yellow-400 transition-all duration-500 ease-in-out">Contact</a></li>
                </ul>
                </div>
                <div className="lg:col-span-3 md:col-span-4 col-span-12">
                   <h5 className="tracking-wide font-semibold">Alamat</h5>
                
                    <p>Jl Puspowarno Raya Nomor 55D, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50141</p>
                    <iframe 
                    title="Google Maps Location"
                    width="450" 
                    height="250" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    src="https://maps.google.com/maps?width=450&amp;height=250&amp;hl=en&amp;q=76%20Jl.%20Puspowarno+(PT%20Menjangan%20Enam%20Trading%20and%20Distribution)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                </div>
                <div className="border-t border-slate-50 mt-10 pt-6 text-center">
                    <p className="text-sm text-slate-600">&copy; 2024 PT Menjangan Enam Trading and Distribution. All rights reserved.</p>
                </div>
            </div>
        </div>
      </footer>

    );
}

export default Footer;