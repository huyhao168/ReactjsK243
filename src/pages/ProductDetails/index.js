import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/Api";
import { useParams } from "react-router-dom";
import { getImageProduct } from "../../shared/ultils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux-setup/reducers/cart";
import { useSelector } from "react-redux";

const ProductDetails = () => {
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getProduct(id, {})
            .then(({ data }) => {
                setProductDetail(data.data)
            })
            .catch((error) => console.log(error))
    }, [])

    //Mua hang
    const dispatch = useDispatch();
    const clickAddToCar = (type) => {
        dispatch(addToCart({
            _id: id,
            name: productDetail.name,
            image: productDetail.image,
            price: productDetail.price,
            qty: 1,

        }));
        console.log(totalCartItems);
        if (type === "buy-now") return navigate("/Cart");
    }
    //Lay tong so trong gio hang, tham so useSelecttor la store, dung Destructuring gia tri cua store la cart
    const totalCartItems = useSelector((state) =>
        state.items.reduce((total, item) => {
            if (item?._id === id) total += item.qty;
            return total; // Trả về giá trị tổng mới
        }, 0)
        // console.log(state.items)
    );

    return (
        <>
            <div>
                <div id="product">
                    <div id="product-head" className="row">
                        <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
                            <img src={getImageProduct(productDetail.image)} />
                        </div>
                        <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
                            <h1>{productDetail?.name}</h1>
                            <ul>
                                <li><span>Bảo hành:</span> 12 Tháng</li>
                                <li><span>Đi kèm:</span> {productDetail?.accessories}</li>
                                <li><span>Tình trạng:</span>{productDetail?.status}</li>
                                <li><span>Khuyến Mại:</span>{productDetail?.promotion}</li>
                                <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                                <li id="price-number">{productDetail?.price}đ</li>
                                {productDetail?.is_stock ? (<li className="text text-success" id="status">Còn hàng</li>)
                                    : (<li className="text text-danger" id="status">Hết hàng</li>)

                                }

                            </ul>
                            {/* <div id="add-cart"><a href="#">Mua ngay</a></div> */}

                            <div id="add-cart">
                                <button onClick={() => clickAddToCar("buy-now")} className="btn btn-warning mr-2">
                                    Mua ngay
                                </button>

                                <button className="btn btn-info" onClick={clickAddToCar}>
                                    Thêm vào giỏ hàng
                                </button>
                                <p className="btn btn-info" >
                                    {totalCartItems}
                                </p>
                            </div>



                        </div>
                    </div>
                    <div id="product-body" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3>Đánh giá về iPhone X 64GB</h3>
                            {productDetail?.details}
                        </div>
                    </div>
                    {/*	Comment	*/}
                    <div id="comment" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3>Bình luận sản phẩm</h3>
                            <form method="post">
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input name="comm_name" required type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input name="comm_mail" required type="email" className="form-control" id="pwd" />
                                </div>
                                <div className="form-group">
                                    <label>Nội dung:</label>
                                    <textarea name="comm_details" required rows={8} className="form-control" defaultValue={""} />
                                </div>
                                <button type="submit" name="sbm" className="btn btn-primary">Gửi</button>
                            </form>
                        </div>
                    </div>
                    {/*	End Comment	*/}
                    {/*	Comments List	*/}
                    <div id="comments-list" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn A</b></li>
                                    <li>2018-01-03 20:40:10</li>
                                    <li>
                                        <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn A</b></li>
                                    <li>2018-01-03 20:40:10</li>
                                    <li>
                                        <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn A</b></li>
                                    <li>2018-01-03 20:40:10</li>
                                    <li>
                                        <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn A</b></li>
                                    <li>2018-01-03 20:40:10</li>
                                    <li>
                                        <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn A</b></li>
                                    <li>2018-01-03 20:40:10</li>
                                    <li>
                                        <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*	End Comments List	*/}
                </div>
                {/*	End Product	*/}
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
export default ProductDetails;    