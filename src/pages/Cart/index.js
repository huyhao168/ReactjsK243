import { ReactReduxContext, useSelector } from "react-redux";
import React from "react";
import { getImageProduct } from "../../shared/ultils";
import { paste } from "@testing-library/user-event/dist/paste";
import { updateItemCart, deleteItemCart } from "../../redux-setup/reducers/cart";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { order } from "../../services/Api";

const Cart = () => {
    const itemsCart = useSelector(({ cart }) => cart.items);
    const totalPrice = useSelector(({ cart }) =>
        cart.items.reduce((total, item) => {
            total += item?.qty * item?.price;
            return total; // Trả về giá trị tổng mới
        }, 0)
    );

    // Thay đổi số lượng đặt hàng
    const dispatch = useDispatch();
    const changeQty = (e, id) => {
        const val = Number(e.target.value);
        if (val === 0) {
            // eslint-disable-next-line no-restricted-globals
            const isConfirm = confirm("Ban co muon xoa san pham khoi gio hang khong?")
            // console.log(isConfirm);
            if (isConfirm) {

                dispatch(deleteItemCart({ _id: id }))

            }
            else {
                // dispatch(updateItemCart({_id:id,qty:val}))    
                return false
            }
        }
        else {
            dispatch(updateItemCart({ _id: id, qty: val }))
        }

    }
    // Đặt hàng

//     const data = {
//         fullName: "Vietpro",
// phone: "0123456789",
// email: "vietpro.edu.vn@gmail.com",
// address: "Hà Nội",
// items: [
//  {prd_id: "321h213kjh321gjh23", price: 15000000, qty: 2},
//  item,
//  item,
//  ...
// ],
// }


    const [inputsOrder, setInputsOrder] = useState({});
    const changeInputOrder = (e)=>{
        const {name, value} = e.target;
        return setInputsOrder({...inputsOrder, [name]: value});
    }
    
    const clickOrder=(e)=>{
        e.preventDefault();
        // const newItems = items.map((item) => ({
        //             prd_id: item._id,
        //             price: item.price,
        //             qty: item.qty,
        //         }));
    }


    return (

        <>
            <div id="my-cart">
                <div className="row">
                    <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
                    <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
                    <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
                </div>
                <form method="post">
                    {
                        itemsCart?.map((item, index) =>

                            <div className="cart-item row" key={index}>
                                <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                    <img src={getImageProduct(item.image)} />
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                                    <input type="number"
                                        id="quantity"
                                        className="form-control form-blue quantity"
                                        onChange={(e) => changeQty(e, item._id)}
                                        value={item?.qty} />

                                </div>
                                <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                                    <b>{item?.qty * item?.price}</b>
                                    <a href="#">Xóa</a></div>
                            </div>

                        )
                    }
                    <div className="row">
                        <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                            <button id="update-cart" className="btn btn-success" type="submit" name="sbm">Cập
                                nhật giỏ hàng</button>
                        </div>
                        <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
                        <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{totalPrice}đ</b></div>
                    </div>

                </form>
                {/* Customer Info */}
                <div id="customer">
                    <form method="post">
                        <div className="row">
                            <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                                <input placeholder="Họ và tên (bắt buộc)" type="text" name="name" onChange={ changeInputOrder } value={inputsOrder?.name}
                                    className="form-control" required />
                            </div>
                            <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
                                <input placeholder="Số điện thoại (bắt buộc)" type="text" name="phone" onChange={ changeInputOrder } value={inputsOrder?.phone}
                                    className="form-control" required />
                            </div>
                            <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
                                <input placeholder="Email (bắt buộc)" type="text" name="mail" onChange={ changeInputOrder } value={inputsOrder?.mail}
                                    className="form-control" required />
                            </div>
                            <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                                <input placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" onChange={ changeInputOrder } value={inputsOrder?.add}
                                    name="add" className="form-control" required />
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="by-now col-lg-6 col-md-6 col-sm-12">
                            <a href="#" onClick={clickOrder}>
                                <b>Mua ngay</b>
                                <span>Giao hàng tận nơi siêu tốc</span>
                            </a>
                        </div>
                        <div className="by-now col-lg-6 col-md-6 col-sm-12">
                            <a href="#">
                                <b>Trả góp Online</b>
                                <span>Vui lòng call (+84) 0988 550 553</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* End Customer Info */}
            </div>
        </>
    )
}
export default Cart;    