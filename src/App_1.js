import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Struktur from "./components/Struktur";
import Visi from "./components/Visi";

class App extends React.Component {
    render() {
        return  (
            <div>
                <Header />
                <Home />
                <AboutUs />
                <Visi />
                <Struktur />
                <Product />
                <Footer />
            </div>
        );
    }
}

export default App;
