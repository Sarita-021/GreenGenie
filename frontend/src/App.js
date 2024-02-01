import Auth from "./components/Auth/Auth";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import About from "./pages/about";
import Blog from "./pages/blog";
import AddItem from "./pages/listItem";
import CompleteProfile from "./components/Auth/CompleteProfile";
import UserProfile from "./pages/dashboard";
import NotFound from "./pages/notfound";


function App() {

    useEffect(() => {
        const data = localStorage.getItem("user");
        // if (data) {
        //     <Route exact path={`/profile/${JSON.parse(localStorage.getItem("user")).username}`} element={<UserProfile />} />
        // }
        // console.log(JSON.parse(localStorage.getItem("user")));
    }, []);

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
                        {/* <Route exact path={`/profile/${JSON.parse(localStorage.getItem("user")).username}`} element={<UserProfile />} /> */}
                        <Route path="/*" element={<NotFound />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;