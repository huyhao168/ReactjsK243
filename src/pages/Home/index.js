import { useState, useEffect } from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Home = () => {
    const [lastestProducts, setLastestProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    useEffect(() => {
        // sp moi
        getProducts({
            params: {
                limit: 6,
            }
        })
            .then(({ data }) => setLastestProducts(data.data.docs))
            .catch((error) => console.log(error))
        //sp noi bat
        getProducts({
            params: {
                limit: 6,
                is_featured: true,
            }
        })
            .then(({ data }) => setFeaturedProducts(data.data.docs))
            .catch((error) => console.log(error))

    }, []);

    return (

        <>
            {/* SP noi bat */}
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">
                    {
                        featuredProducts.map((item, index) => (
                            <ProductItem item={item} key={index} />
                        ))
                    }
                </div>
            </div>

            {/* SP moi */}
            <div className="products">
                <h3>Sản phẩm mới</h3>
                <div className="product-list card-deck">
                    {
                        lastestProducts.map((item, index) => (
                            <ProductItem item={item} key={index} />
                        ))
                    }


                </div>
            </div>


        </>
    )
}
export default Home;    