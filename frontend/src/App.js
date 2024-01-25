import Auth from "./components/Auth/Auth";
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import About from "./pages/about";
import Blog from "./pages/blog";
import AddItem from "./pages/listItem";


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/blog" element={<Blog />} />
                        <Route exact path="/login" element={<Auth />} />
                        <Route exact path="/item" element={<AddItem />} />

                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;