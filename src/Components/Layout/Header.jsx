import React, { useEffect, useState } from 'react';
// import "./index.css"
import { Link } from 'react-router-dom'
export default function Header() {
    const [cate, setcate] = useState([])
    useEffect(() => {
        const fetchCate = async () => {
            try {
                const reponse = await fetch('http://localhost:3000/categories')
                const data = await reponse.json()
                setcate(data)
            } catch (error) {
                console.error('Error fetch', error);
            }
        }
        fetchCate()
    }, [])
    const Cate = cate.map((item, index) => {
        return (
            <>
                <li key={index}>
                    <a
                        className="dropdown-item"
                        href="#"
                    >
                        {' '} <Link className='text-dark text-decoration-none' to={`/product/${item.id}`}>{item.name}</Link>
                    </a>
                </li>

            </>
        )
    })
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light height">
                <div className="container">
                    <a className="navbar-brand" href="#">HLSHOP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav left">
                            <li className="nav-item">
                                <Link className='text-dark text-decoration-none nav-link' to={`/`}>Trang chủ</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sản Phẩm
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#"><Link className='text-dark text-decoration-none' to={`/product`}>Tất cả sản phẩm</Link></a>
                                    {Cate}
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Giới Thiệu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin Tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Liên Hệ</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 d-none d-lg-flex">
                            <div className="input-group">
                                <input className="form-controls mr-2" type="search" placeholder="Tìm Kiếm" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success" type="submit">Tìm</button>
                                </div>
                            </div>
                        </form>
                        <div className="navbar-nav right">
                            <Link className='text-dark nav-link' to={`/login`}>Đăng Nhập</Link>
                            <Link className='text-dark nav-link' to={`/register`}>Đăng Ký</Link>
                            {/* <a className="nav-link" href="#">Giỏ Hàng</a> */}
                            <Link className='text-dark nav-link' to={`/cart`}>Giỏ Hàng</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}