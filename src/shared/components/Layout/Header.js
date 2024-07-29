import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const [keyword, setKeyword] = useState("");

    const changeKeyword=(e)=>
        {
            setKeyword(e.target.value);
        }

    const navigate=useNavigate();
    const clickSearch=()=>{
        navigate(`/Search?keyword=${keyword}`);
    }

    return (
        <div id="header">
            <div className="container">
                <div className="row">
                    <div id="logo" className="col-lg-3 col-md-12 col-sm-12">
                        <h1><Link to="/"><img className="img-fluid" src="images/logo.png" /></Link></h1>
                    </div>
                    <div id="search" className="col-lg-4 col-md-12 col-sm-12">
                        <form className="form-inline">
                            <input className="form-control mt-3" type="search" onChange={changeKeyword}
                                placeholder="Tìm kiếm" aria-label="Search" />
                            <button className="btn btn-danger mt-3" type="button" onClick={clickSearch}>Tìm kiếm</button>
                        </form>
                    </div>
                    <div id="cart" className="col-lg-5 col-md-12 col-sm-12">
                        <i className="fa-solid fa-user mr-1" />
                        <a className="mr-2" href="#">đăng nhập</a>|
                        <a className="mr-2 ml-2" href="#">đăng ký</a>|
                        <a className="mt-4 mr-2 ml-2" >giỏ hàng
                            <ul>
                                <li><Link to="/Cart" ><i className="fas fa-shopping-cart" /> Giỏ hàng của bạn</Link></li>
                                <li><Link to="#" ><i className="fas fa-file-alt" /> Đơn hàng đã mua</Link></li>
                            </ul>
                        </a>
                        <span className="mt-3">8</span>
                    </div>
                </div>
            </div>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon" />
            </button>
        </div>
    )
}

export default Header;