import React from "react";
import { RiCloseLine, RiMenuFill, RiSearchLine } from "react-icons/ri";

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (   
        <header id="navbar" className="bg-white sticky top-0 z-50">
        <nav className="flex max-w-7xl mx-auto justify-between items-center py-3 px-6">
            <img src="/asset/logo.jpeg" alt="navbar-page" className="w-16 h-auto"/>
    
                <div className={`absolute w-full lg:relative lg:flex lg:justify-center items-center duration-300 bg-white ${menuOpen ? "left-0" : "hidden"}`}>
                  <ul className="flex flex-col lg:flex-row lg:gap-x-10 text-lg lg:text-xl font-medium">
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About Us</a></li>
                    <li><a href="#product" className="nav-link">Product</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                  </ul>
                </div>
                <div className="flex items-center gap-4">
                    <RiSearchLine className="text-xl cursor-pointer z-50" />
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="text-2xl cursor-pointer z-50 lg:hidden">
                        {menuOpen ? <RiCloseLine /> : <RiMenuFill />}
                    </button>
                </div>
            </nav>
       </header>
    );
}

export default Header;