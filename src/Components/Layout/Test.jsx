import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CheckboxComponent = () => {
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    console.log(watch("example"))
    const onSubmit = async (data) => {
        console.log(data);    
        
        try {
            const response = await fetch('http://localhost:3000/products/test', {
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
        <div className="container mt-4">
            <h2 className="mb-4">
                Thêm Sản Phẩm Mới
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}
                action="/submit-product"
                // encType="multipart/form-data"
                method="post"
            >
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
                        // multiple
                        name="imgs"
                        required
                        type="file"
                        {...register("imgs")}
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
    );
};

export default CheckboxComponent;
