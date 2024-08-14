import React from 'react';
import "./index.css"
export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-7 foter">
                            <div className="footer__about">
                                <a
                                    className="text-decoration-none text-light"
                                    href="index.html"
                                >
                                    HLShop
                                </a>
                                <p>
                                    Chào mừng đến với Cửa Hàng Thời Trang của HLSHOP  nơi thời trang và cá tính gặp gỡ!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget">
                                <h6>
                                    Quick links
                                </h6>
                                <ul>
                                    <li>
                                        <a
                                            className="text-decoration-none text-light"
                                            href="#"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-light"
                                            href="#"
                                        >
                                            Blogs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-light"
                                            href="#"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-light"
                                            href="#"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="footer__widget">
                                <h6>
                                    Account
                                </h6>
                                <ul>
                                    <li>
                                        <a
                                            className="text-decoration-none text-light"
                                            href="#"
                                        >
                                            My Account
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-light"
                                            href="#"
                                        >
                                            Orders Tracking
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-light"
                                            href="#"
                                        >
                                            Checkout
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-light"
                                            href="#"
                                        >
                                            Wishlist
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-8">
                            <div className="footer__newslatter">
                                <h6>
                                    NEWSLETTER
                                </h6>
                                <form action="#">
                                    <input
                                        placeholder="Email"
                                        type="text"
                                    />
                                    <button
                                        className="site-btn"
                                        type="submit"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <div className="footer__social">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-youtube-play" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-pinterest" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}