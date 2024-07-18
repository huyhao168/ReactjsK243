import React, { useState, useEffect } from "react";
import { getProductsCategory, getCategory,getCategories } from "../../services/Api";
import { useParams } from "react-router-dom";
import ProductItem from "../../shared/components/product-item";

const Category = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [total, setTotal] = useState(0);
    const {id} = useParams();

    useEffect(() => {

        // Get Products By Category ID
        getCategory(id, {})
            .then(({ data }) => {
                // console.log(id)
                 setCategory(data.data)
                 
            })
            .catch((error)=>console.log(error));

    }, [id]);
    
   
    useEffect(() => {

        // Get Products By Category ID
        getProductsCategory(id, {})

            .then(({ data }) => {
                // console.log(id)
                setProducts(data.data.docs)
                setTotal(data.data.pages.total)
            })
            .catch((error)=>console.log(error));

    }, [id]);


    return (

        <>
            <div className="products">
                <h3>{category.name} (hiện có {total} sản phẩm)</h3>
                <div className="product-list card-deck">
                    {
                        products?.map((product, index) => (
                            <ProductItem item={product} key={index} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
export default Category;   