import Auth from "./components/Auth/Auth";
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import About from "./pages/about";
import Blog from "./pages/blog";
import AddItem from "./pages/listItem";
import UserProfile from "./pages/dashboard";
import CompleteProfile from "./components/Auth/CompleteProfile";
import NotFound from "./pages/notfound";
import Bot from "./pages/bot";
import ItemDetailsForm from "./pages/itemdisplay";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} >
                        <Route index element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/blog" element={<Blog />} />
                        <Route exact path="/login" element={<Auth />} />
                        <Route exact path="/item" element={<AddItem />} />
                        <Route exact path="/bot" element={<Bot />} />
                        <Route path="/*" element={<NotFound />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/additem" element={<ItemDetailsForm />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
