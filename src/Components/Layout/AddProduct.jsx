import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
    const [imgs, setimgs] = useState([])
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [categoryID, setcategoryID] = useState('1')
    // const [hot , sethot] = useState('')
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const image = []
        for (let index = 0; index < imgs.length; index++) {
            const element = imgs[index];
            console.log(element.name);
            image.push(element.name)
        }
        console.log(categoryID);
        
        const data = {
            name: name,
            price: price,
            description: description,
            categoryID: categoryID,
            imgs: Array.from(image),
        }
        console.log(data);


        try {
            const response = await fetch('http://localhost:3000/products/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log("thanh cong");
                // navigate('/login')

            } else {
                // Xử lý lỗi
                console.error('Error adding product:', await response.json());
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }
    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4">
                    Thêm Sản Phẩm Mới
                </h2>
                <form onSubmit={onSubmit}
                    action="/submit-product"
                    // encType="multipart/form-data"
                    method="post"
                >
                    <div className="mb-3">
                        <label
                            className="form-label"
                            htmlFor="name"
                        >
                            Tên sản phẩm:
                        </label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label"
                            htmlFor="price"
                        >
                            Giá sản phẩm:
                        </label>
                        <input
                            className="form-control"
                            id="price"
                            name="price"
                            required
                            step="0.01"
                            type="number"
                            value={price}
                            onChange={(e) => setprice(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label"
                            htmlFor="description"
                        >
                            Mô tả:
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            required
                            rows="4"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label"
                            htmlFor="categoryID"
                        >
                            Danh mục:
                        </label>
                        <select
                            className="form-select"
                            id="categoryID"
                            name="categoryID"
                            required
                            value={categoryID}
                            onChange={(e) => setcategoryID(e.target.value)}
                        >
                            <option value="1">
                                Danh mục 1
                            </option>
                            <option value="2">
                                Danh mục 2
                            </option>
                            <option value="3">
                                Danh mục 3
                            </option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label"
                            htmlFor="imgs"
                        >
                            Hình ảnh:
                        </label>
                        <input
                            accept="image/*"
                            className="form-control"
                            id="imgs"
                            multiple
                            name="imgs"
                            required
                            type="file"
                            // value={imgs}
                            onChange={(e) => setimgs(e.target.files)}
                        />
                        <small className="form-text text-muted">
                            Chọn nhiều hình ảnh nếu cần.
                        </small>
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Gửi
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddProduct;