import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

function ProductAdmin() {
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        const fetchPro = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchPro();
    }, []);

    const onSubmit = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/products/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                setProduct(product.filter(item => item.id !== id));
                console.log("Xóa thành công");
            } else {
                console.error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
            <div className="p-4">
                <h1 className="mb-4">Quản lý sản phẩm</h1>
                <div className="mb-3">
                    <Link className="btn btn-primary" to={`/addproduct`}>Thêm sản phẩm</Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Hình</th>
                                <th>Mô tả</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td className='Text_Name'>{item.name}</td>
                                    <td>{item.price}.000 VND</td>
                                    <td>
                                        <img
                                            alt=""
                                            className="img-fluid"
                                            src={`img/${item.img[0]}`}
                                            width="100px"
                                        />
                                    </td>
                                    <td className='description-cell'>{item.description}</td>
                                    <td>
                                        <Link className="action-button edit" to={`/editproduct/${item.id}`}>sửa</Link>
                                        <button onClick={() => onSubmit(item.id)} className="action-button delete">xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <nav>
                <ul className="pagination">
                    {[...Array(Math.ceil(product.length / productsPerPage)).keys()].map(i => (
                        <li
                            key={i + 1}
                            className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}
                        >
                            <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default ProductAdmin;
