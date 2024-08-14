import React, { useEffect, useState } from 'react';
import "./index.css"
import "./detail.css"
import { useParams } from 'react-router-dom'
export default function Detail() {
    const { ID } = useParams()
    const [images, setImages] = useState([]);
    const [pro, setPro] = useState([])
    const [quantity, setQuantity] = useState(1);
    const [showNotification, setShowNotification] = useState(false);
    const handleDecrement = () => {
        if (pro.quantity > 1) {
            pro.quantity--
            setQuantity(pro.quantity);
        }
    };
    const handleIncrement = () => {
        pro.quantity++
        setQuantity(pro.quantity);
        console.log(pro.quantity);
    };
    const fetchPro = async () => {
        try {
            const reponse = await fetch(`http://localhost:3000/products/${ID}`)
            const data = await reponse.json();
            setPro(data);
            return data;
        } catch (error) {
            console.error('Error fetch', error);
        }
    }
    useEffect(() => {
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        const mainImage = document.getElementById('main-image');
        const sizeBtns = document.querySelectorAll('.size-btn');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                thumbnail.classList.add('active');
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                mainImage.src = thumbnail.src;
            });
        });
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    })
    useEffect(() => {
        fetchPro().then(data => {
            return data
        })
    }, [])
    useEffect(() => {
        if (pro.img && pro.img.length > 0) {
            setImages(pro.img);
        }
    }, [pro.img]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const AddCart = (value) => {
        // Lấy item từ localStorage và parse nó thành mảng
        let item = JSON.parse(window.localStorage.getItem("cart"));
        // const findID = item.find(item => item.id == categoryID)
        // console.log("item", findID);
        try {
            // Nếu không có item nào trong localStorage, khởi tạo mảng mới với value
            if (item === null) {
                item = [];
            }
            // Kiểm tra nếu value là một mảng, push từng phần tử của value vào item
            // Nếu value là một đối tượng đơn, push trực tiếp vào item
            if (Array.isArray(value)) {
                value.forEach((newItem) => {
                    // Tìm xem item này đã tồn tại trong mảng hay chưa (dựa trên id hoặc thuộc tính khác)
                    const existingItem = item.find(pro => pro.id === newItem.id);
                    if (existingItem) {
                        // Nếu đã tồn tại, tăng số lượng
                        existingItem.quantity += newItem.quantity;
                    } else {
                        // Nếu chưa tồn tại, thêm vào mảng
                        item.push(newItem);
                    }
                });
            } else {
                // Nếu value không phải mảng, kiểm tra nó trực tiếp
                const existingItem = item.find(pro => pro.id === value.id);

                if (existingItem) {
                    // Nếu đã tồn tại, tăng số lượng
                    existingItem.quantity += value.quantity;
                } else {
                    // Nếu chưa tồn tại, thêm vào mảng
                    item.push(value);
                }
            }

            // Lưu lại mảng mới vào localStorage
            window.localStorage.setItem("cart", JSON.stringify(item));
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000);

        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    };

    const showDetail = <>
        <div className="col-md-6">
            <div className="d-flex flex-column  mb-3">
                {images.length > 0 ? (
                    <img id="main-image" className="product_image " src={`/img/${pro.img[0]}`} alt="" />
                ) : (
                    <div>Loading...</div>
                )}
                <div className="mt-3 d-flex">
                    {/* <img className="product-thumbnail active" src="" alt="" /> */}
                    {images.length > 0 ? (
                        images.map((imgUrl, index) => (
                            <img className="product-thumbnail" key={index} src={`/img/${pro.img[index]}`} alt={`Image ${index}`} />
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-4">
                {pro.name}
            </h1>
            <p className="product-price text-dark mb-4">
                {pro.price}.000 VND
            </p>
            <p className="product-description mb-4">
                Mô tả chi tiết về sản phẩm. Bao gồm các thông tin như chất liệu, kích thước, tính năng, v.v.
            </p>
            <div className="d-flex align-items-center mb-4">
                <label
                    className="me-3"
                    htmlFor="quantity"
                >
                    Số lượng:
                </label>
                <div>
                    <div className="quantity-input">
                        <button onClick={handleDecrement} className="btn-minus">
                            -
                        </button>
                        <div>
                            {pro.quantity}
                        </div>
                        <button onClick={handleIncrement} className="btn-plus">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="product-size mr-3 mt-3">
                    <button className="btn btn-outline-secondary btn-sm size-btn active">
                        S
                    </button>
                    <button className="btn btn-outline-secondary btn-sm size-btn">
                        M
                    </button>
                    <button className="btn btn-outline-secondary btn-sm size-btn">
                        L
                    </button>
                </div>
                <br />
            </div>
            <div className="d-flex">
                <button onClick={() => AddCart(pro)} className="btn btn-primary me-3">
                    Thêm vào giỏ hàng
                </button>
                {showNotification && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '5px',
                            zIndex: 9999,
                        }}
                    >
                        <p>Sản phẩm của bạn đã thêm vào giỏ hàng thành công</p>
                    </div>
                )}
            </div>
        </div>

    </>

    return (
        <>
            <div>
                <div className="container my-5">
                    {/* <h1>{title}</h1> */}
                    <div className="row">
                        {showDetail}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <h1>
                            Mô tả sản phẩm
                        </h1>
                        <p>
                            Đồng hồ Michael Kors Runway là một trong những sản phẩm nổi bật của thương hiệu Michael Kors, được thiết                                kế với phong cách thời trang và sang trọng. Vỏ đồng hồ được chế tác từ thép không gỉ 316L với đường kính                                42mm, vừa vặn với cổ tay nam giới. Mặt đồng hồ có hoa văn sọc độc đáo, đi kèm kim giờ và kim phút mạ                                vàng nổi bật. Dây đeo bằng da cao cấp với khóa bướm tiện lợi.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <p className=" fs-1">
                        Các sản phẩm liên quan
                    </p>
                    <div className="row d-flex justify-content-center ">
                        <div className="col-md-3 col-10">
                            <div className="product-card">
                                <img
                                    alt="Product Image"
                                    className="h-75"
                                    src="img/1.jpeg"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        Tên sản phẩm
                                    </h5>
                                    <p className="card-text text-center">
                                        Mô tả ngắn về sản phẩm.
                                    </p>
                                    <a
                                        className="btn btn-dark "
                                        href=""
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-10">
                            <div className="product-card">
                                <img
                                    alt="Product Image"
                                    className="h-75"
                                    src="img/1.jpeg"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        Tên sản phẩm
                                    </h5>
                                    <p className="card-text text-center">
                                        Mô tả ngắn về sản phẩm.
                                    </p>
                                    <a
                                        className="btn btn-dark "
                                        href=""
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-10">
                            <div className="product-card">
                                <img
                                    alt="Product Image"
                                    className="h-75"
                                    src="img/1.jpeg"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        Tên sản phẩm
                                    </h5>
                                    <p className="card-text text-center">
                                        Mô tả ngắn về sản phẩm.
                                    </p>
                                    <a
                                        className="btn btn-dark "
                                        href=""
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}