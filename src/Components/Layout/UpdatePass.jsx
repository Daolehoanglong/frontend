import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
function UpdatePass() {
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    // console.log(watch("example"))
    const onSubmit = async (Password) => {
        const Email = localStorage.getItem('Email');
        console.log(Password.Password);
        const data = {
            Password: Password.Password,
            Email
        }
        // console.log(PassWords);
        console.log(Email);
        

        try {
            const response = await fetch('http://localhost:3000/user/updatePassword', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log("thanh cong");
                console.log(await response.json());

                navigate('/login')

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
            <body className='body'>
                <div className="login-container">
                    <div className="login-card">
                        <h2 className="login-header">
                            Welcome Back
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="form-control"
                                    id="password"
                                    required
                                    type="password"
                                    {...register("Password")}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Nhập lại mật khẩu
                                </label>
                                <input
                                    className="form-control"
                                    id="email"
                                    required
                                    type="password"
                                    {...register("rePassword")}
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

export default UpdatePass;