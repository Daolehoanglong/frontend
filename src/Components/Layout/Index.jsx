import React, { useEffect, useState } from 'react';
import "./index.css"
import { Link, useParams } from 'react-router-dom'
export default function Index() {
    const [productHot, setProductHot] = useState([])
    const [pro, setpro] = useState([])
    useEffect(() => {
        const fetchPro = async () => {
            try {
                const reponse = await fetch('http://localhost:3000/products/NewProduct')
                const data = await reponse.json()
                setpro(data)
            } catch (error) {
                console.error('Error fetch', error);
            }
        }
        fetchPro()
    }, [])
    const show = productHot.find(pro => pro.id == 1)
    console.log(show);
    
    useEffect(() => {
        const fetchProductHot = async () => {
            try {
                const reponse = await fetch('http://localhost:3000/products/hot')
                const data = await reponse.json()
                setProductHot(data)
            } catch (error) {
                console.error('Error fetch', error);
            }
        }
        fetchProductHot()
    }, [])
    // console.log(showHot);
    const showHot = productHot.map((item, index) => {
        return (
            <>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                    <div className="product-item bg-light mb-4">
                        <div className="product-img position-relative overflow-hidden">
                            <img
                                alt="Áo Dài Tay 1"
                                className="img-fluid w-100"
                                src={`img/${item.img[0]}`}
                            />
                            <div className="product-action">
                                <Link className="btn btn-outline-dark" to={`/detail/${item.id}`}>
                                    {/* <a
                                    aria-label="Xem chi tiết Áo Dài Tay 1"
                                    className="btn btn-outline-dark"
                                    href="detail.html"
                                > */}
                                    <svg
                                        className="bi bi-search"
                                        fill="currentColor"
                                        height="12"
                                        viewBox="0 0 16 16"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    {/* </a> */}
                                </Link>
                                <a
                                    aria-label="Thêm vào yêu thích"
                                    className="btn btn-outline-dark"
                                    href="#"
                                >
                                    <svg
                                        className="bi bi-heart"
                                        fill="currentColor"
                                        height="12"
                                        viewBox="0 0 16 16"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                </a>
                                <a
                                    aria-label="Thêm vào giỏ hàng"
                                    className="btn btn-outline-dark"
                                    href="#"
                                >
                                    <svg
                                        className="bi bi-bag"
                                        fill="currentColor"
                                        height="12"
                                        viewBox="0 0 16 16"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to={`/detail/${item.id}`}>
                                {/* <a
                                className="h6 text-decoration-none text-truncate"
                                href="detail1.html"
                            > */}
                                {item.name}
                                {/* </a> */}
                            </Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>
                                    {item.price}.000 VNĐ
                                </h5>
                                <h6 className="text-muted ml-2">
                                    {/* <del>
                                        250.000 VNĐ
                                    </del> */}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    const showProduct = pro.map((item, index) => {
        return (
            <>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                    <div className="product-item bg-light mb-4">
                        <div className="product-img position-relative overflow-hidden">
                            <img
                                alt="Áo Dài Tay 1"
                                className="img-fluid w-100"
                                src={`img/${item.img[0]}`}
                            />
                            <div className="product-action">
                                <Link className="btn btn-outline-dark" to={`/detail/${item.id}`}>
                                    {/* <a
                                    aria-label="Xem chi tiết Áo Dài Tay 1"
                                    className="btn btn-outline-dark"
                                    href="detail.html"
                                > */}
                                    <svg
                                        className="bi bi-search"
                                        fill="currentColor"
                                        height="12"
                                        viewBox="0 0 16 16"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    {/* </a> */}
                                </Link>
                                <a
                                    aria-label="Thêm vào yêu thích"
                                    className="btn btn-outline-dark"
                                    href="#"
                                >
                                    <svg
                                        className="bi bi-heart"
                                        fill="currentColor"
                                        height="12"
                                        viewBox="0 0 16 16"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                </a>
                                <a
                                    aria-label="Thêm vào giỏ hàng"
                                    className="btn btn-outline-dark"
                                    href="#"
                                >
                                    <svg
                                        className="bi bi-bag"
                                        fill="currentColor"
                                        height="12"
                                        viewBox="0 0 16 16"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to={`/detail/${item.id}`}>
                                {/* <a
                                className="h6 text-decoration-none text-truncate"
                                href="detail1.html"
                            > */}
                                {item.name}
                                {/* </a> */}
                            </Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>
                                    {item.price}.000 VND
                                </h5>
                                <h6 className="text-muted ml-2">
                                    <del>
                                        {/* 250.000 VNĐ */}
                                    </del>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <div>
                <div
                    className="carousel slide"
                    data-ride="carousel"
                    id="carouselBanner"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                alt="Banner 1"
                                className="d-block w-100 banner"
                                src="img/banner1.png"
                            />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                alt="Banner 2"
                                className="d-block w-100 banner"
                                src="img/banner2.png"
                            />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                alt="Banner 3"
                                className="d-block w-100 banner"
                                src="img/banner3.png"
                            />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        data-slide="prev"
                        href="#carouselBanner"
                        role="button"
                    >
                        <span
                            aria-hidden="true"
                            className="carousel-control-prev-icon"
                        />
                        <span className="sr-only">

                        </span>
                    </a>
                    <a
                        className="carousel-control-next"
                        data-slide="next"
                        href="#carouselBanner"
                        role="button"
                    >
                        <span
                            aria-hidden="true"
                            className="carousel-control-next-icon"
                        />
                        <span className="sr-only">

                        </span>
                    </a>
                </div>
                <div className="container mt-5">
                    <h2 className="text-center">
                        Sản Phẩm Nổi Bật
                    </h2>
                    <div className="row">
                        {showProduct}

                    </div>
                </div>
                <div className="banner1 d-flex align-items-center ">

                    <h1 className="text-darks font-weight-bold">
                        MẶC HÀNG NGÀY
                    </h1>

                </div>
                <div className="container mt-5">
                    <h2 className="text-center">
                        SẢN PHẨM MẶC HÀNG NGÀY
                    </h2>
                    <div
                        className="carousel slide"
                        data-ride="carousel"
                        id="productCarousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                 {showHot}
                                    
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    {showProduct}
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            data-slide="prev"
                            href="#productCarousel"
                            role="button"
                            style={{
                                left: '-150px'
                            }}
                        >
                            <span
                                aria-hidden="true"
                                className="carousel-control-prev-icon"
                            />
                            <span className="sr-only">
                                Previous
                            </span>
                        </a>
                        <a
                            className="carousel-control-next"
                            data-slide="next"
                            href="#productCarousel"
                            role="button"
                            style={{
                                right: '-150px'
                            }}
                        >
                            <span
                                aria-hidden="true"
                                className="carousel-control-next-icon"
                            />
                            <span className="sr-only">
                                Next
                            </span>
                        </a>
                    </div>
                </div>
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center text-dark mb-4">
                            TIN TỨC
                        </h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <img
                                            alt="Xu Hướng Thời Trang Mùa Hè 2024"
                                            className="card-img-top"
                                            src="img/thoitrangmuahe.jpg"
                                        />
                                        <h5 className="card-title">
                                            Xu Hướng Thời Trang MÙA HÈ 2024
                                        </h5>
                                        <p className="card-text">
                                            Mùa hè 2024 đang đến gần và các nhà thiết kế đã giới thiệu nhiều xu hướng mới thú vị. Những tông màu tươi sáng,..
                                        </p>
                                        <a
                                            className="btn btn-primary"
                                            href="#"
                                        >
                                            Đọc thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <img
                                            alt="Xu Hướng Thời Trang Mùa Hè 2024"
                                            className="card-img-top"
                                            src="img/chonthoitrang.jpg"
                                        />
                                        <h5 className="card-title">
                                            Cách Chọn Quần Áo Phù Hợp Với Dáng Người
                                        </h5>
                                        <p className="card-text">
                                            Việc chọn lựa quần áo phù hợp với dáng người không chỉ giúp bạn tự tin hơn mà còn tôn vinh ...
                                        </p>
                                        <a
                                            className="btn btn-primary"
                                            href="#"
                                        >
                                            Đọc thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <img
                                            alt="Xu Hướng Thời Trang Mùa Hè 2024"
                                            className="card-img-top"
                                            src="img/nganhmaymac.gif"
                                        />
                                        <h5 className="card-title">
                                            Thời Trang Bền Vững - Xu Hướng Mới Của Ngành May Mặc
                                        </h5>
                                        <p className="card-text">
                                            Trong những năm gần đây, thời trang bền vững đang trở thành một xu hướng mạnh mẽ ...
                                        </p>
                                        <a
                                            className="btn btn-primary"
                                            href="#"
                                        >
                                            Đọc thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}