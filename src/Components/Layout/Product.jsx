import React, { useEffect, useState } from 'react';
import "./product.css"
import { Link, useParams, useLocation } from 'react-router-dom'
export default function Product() {
    const [cate, setcate] = useState([])
    const [productsCate, setproductsCate] = useState([])
    const [options, setOptions] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = options.slice(indexOfFirstProduct, indexOfLastProduct);
    const currentProductsCate = productsCate.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const [sortOption, setSortOption] = useState('latest');
    const location = useLocation();
    let showProduct
    useEffect(() => {
        // Gọi hàm handleSortChange khi trang được load lần đầu
        handleSortChange({ target: { value: 'latest' } });
    }, [location.pathname]);
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        console.log("Selected sort option: ", event.target.value);
        const fetchOption = async () => {
            try {
                const reponse = await fetch(`http://localhost:3000/products/${event.target.value}`)
                const data = await reponse.json()
                setOptions(data)
                console.log(data);
            } catch (error) {
                console.error('Error fetch', error);
            }
        }
        return fetchOption()
    };
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
    const { categoryID } = useParams()
    useEffect(() => {
        const fetchProdcutsCate = async () => {
            try {
                const reponse = await fetch(`http://localhost:3000/category/${categoryID}`)
                const data = await reponse.json()
                setproductsCate(data)
            } catch (error) {
                console.error('Error fetch', error);
            }
        }
        fetchProdcutsCate()
    }, [])
    const Cate = cate.map((item, index) => {
        return (
            <>
                <Link className='text-dark' to={`/product/${item.id}`}>
                    <li className="list-group-item text-dark" key={index}>
                        <a href="" >
                            {item.name}
                        </a>
                    </li>
                </Link>
            </>
        )
    })
    if (categoryID) {
        const findCate = cate.find(item => item.id == categoryID)
        const findPro = options.filter((item) => (item.categoryID == findCate.id))
        showProduct = findPro.map((item, index) => {
            return (
                <>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1 pro_w" key={index}>
                        {product(item)}
                    </div>
                </>
            )
        })
        // title = categoryID
    } else {
        showProduct = currentProducts.map((item, index) => {
            return (
                <>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1 pro_w" key={index}>
                        {product(item)}
                    </div>

                </>
            )
        })
    }
    function product(pro) {
        return (
            <>
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img
                            alt="Áo Dài Tay 1"
                            className="img-fluid img_pro"
                            src={`../img/${pro.img[0]}`}
                        />
                        <div className="product-action">
                            <Link className="btn btn-outline-dark" to={`/detail/${pro.id}`}>
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
                        <a
                            className="h6 text-decoration-none text-truncate"
                            href="detail1.html"
                        >
                            {pro.name}                                    1
                        </a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>
                                {pro.price}.000 VNĐ
                            </h5>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <section className="mt-5 box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="bg-light p-4 mb-4">
                                <h5 className="font-weight-bold">
                                    Danh Mục
                                </h5>
                                <ul className="list-group">
                                    <Link className='text-dark' to={`/product`}>
                                        <li className="list-group-item text-dark">
                                            Tất cả
                                        </li>
                                    </Link>
                                    {Cate}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="col-lg-3 d-flex justify-content-end mb-3">
                                <select className="form-select" value={sortOption} onChange={handleSortChange}>
                                    <option value="latest">Mới nhất</option>
                                    <option value="hotDetail">Mua nhiều</option>
                                    <option value="price-desc">Giá giảm dần</option>
                                    <option value="price-asc">Giá tăng dần</option>
                                </select>
                            </div>
                            <div className="row">
                                {showProduct}
                            </div>
                        </div>
                        {categoryID && categoryID.length > 0 ?(
                            <nav>
                                <ul className="pagination">
                                    {[...Array(Math.ceil(currentProductsCate.length / productsPerPage)).keys()].map(i => (
                                        <li
                                            key={i + 1}
                                            className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}
                                        >
                                            <a href="#" className="page-link" onClick={() => paginate(i + 1)}>
                                                {i + 1}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ):(
                        <nav>
                            <ul className="pagination">
                                {[...Array(Math.ceil(options.length / productsPerPage)).keys()].map(i => (
                                    <li
                                        key={i + 1}
                                        className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}
                                    >
                                        <a href="#" className="page-link" onClick={() => paginate(i + 1)}>
                                            {i + 1}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}