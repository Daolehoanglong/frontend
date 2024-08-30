import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function CheckCode() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    console.log(watch("example"))
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/user/checkCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log("thanh cong");
                navigate('/updatePass')
            } else {
                // Xử lý lỗi
                console.error('Error adding product:', await response.json());
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }
    return (
        <>
            <body className='body'>
                <div className="login-container">
                    <div className="login-card">
                        <h2 className="login-header">
                            Welcome Back
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                            <div className="form-group">
                                <label htmlFor="Code">
                                    Code
                                </label>
                                <input
                                    className="form-control"
                                    id="Code"
                                    required
                                    type="Code"
                                    {...register("Code")}
                                />
                            </div>
                            <button
                                className="login-btn"
                                type="submit"
                            >
                                Login
                            </button>
                            <div className="login_container">
                            </div>
                        </form>
                        <p className="signup-link">
                            Bạn không có tài khoản ?{' '}
                            <a>
                                Sign up
                            </a>
                        </p>
                        <p className="signup-link">
                            <a>
                                Bạn quên tài khoản ?
                            </a>
                        </p>
                    </div>
                </div>
            </body>
        </>
    );
}

export default CheckCode;