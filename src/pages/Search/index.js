import { useState, useEffect } from "react";
import ProductItem from "../../shared/components/product-item";
import { getProducts } from "../../services/Api";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    useEffect(() => {
        getProducts({
            params: {
                name: keyword,
            }
        })
            .then(({ data }) => {
                // console.log(keyword);
                setProducts(data.data.docs);})
            .catch((error) => console.log(error));
    }
        , [keyword])

    return (
        <>
            <div>
                <div className="products">
                    <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span></div>
                    <div className="product-list card-deck">
                        {
                            products?.map((product, index) => (
                                <ProductItem item={product} key={index} />
                            ))
                        }
                    </div>
                </div>
                {/*	End List Product	*/}
                <div id="pagination">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Search;    