import { useState, useEffect } from "react";
import { getCategories } from "../../../services/Api";
import { Link } from "react-router-dom";

const Menu = ({categories}) => {
   

    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <nav>
                    <div id="menu" className="collapse navbar-collapse">
                        <ul>
                            {
                                categories.map((category, index) => (
                                    <li className="menu-item" key={index}><Link to={`/Category/${category._id}`}>{category.name}</Link></li>
                                ))
                            }
                     
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Menu;