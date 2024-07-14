
import React from "react";
import Footer from "./shared/components/Layout/Footer";
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Sidebar from "./shared/components/Layout/Sidebar";
import Slider from "./shared/components/Layout/Slider";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

const App = () => {

  return (
    <>
      <Router>
        <div>
          {/*	Header	*/}
          <Header />
          {/*	End Header	*/}
          {/*	Body	*/}
          <div id="body">
            <div className="container">
              <Menu />
              <div className="row">
                <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                  {/*	Slider	*/}
                  <Slider />

                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Category/:id" element={<Category/>} />
                    <Route path="/Cart" element={<Cart/>} />
                    <Route path="*" element={<NotFound/>} />
                  </Routes>

                </div>

                <Sidebar />
              </div>
            </div>
          </div>
          {/*	End Body	*/}

          {/*	Footer	*/}
          <Footer />
          {/*	End Footer	*/}
        </div>
      </Router>




    </>
  )
}

export default App;