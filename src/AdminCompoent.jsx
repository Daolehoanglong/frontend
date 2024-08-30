const Admin = ({ children }) => {
    return (
        <>
            <body>
                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col-lg-2 col-md-3 bg-dark text-white p-4 sidebar-content">
                            <h3 className="text-center">
                                <span className="text-danger">
                                    DLHL
                                </span>
                                <span>
                                    {' '}SHOP
                                </span>
                            </h3>
                            <hr />
                            <nav className="nav flex-column">
                                <a
                                    className="nav-link text-white"
                                    href="/statistic"
                                >
                                    <i className="bi bi-pie-chart-fill me-2" />
                                    Quản lý thống kê
                                </a>
                                <a
                                    className="nav-link text-white"
                                    href="/categories"
                                >
                                    <i className="bi bi-tag-fill me-2" />
                                    Quản lý danh mục
                                </a>
                                <a
                                    className="nav-link text-white"
                                    href="/products"
                                >
                                    <i className="bi bi-box-seam me-2" />
                                    Quản lý sản phẩm
                                </a>
                                <a
                                    className="nav-link text-white"
                                    href="/users"
                                >
                                    <i className="bi bi-people-fill me-2" />
                                    Quản lý người dùng
                                </a>
                                <a
                                    className="nav-link text-white"
                                    href="/order"
                                >
                                    <i className="bi bi-cart-fill me-2" />
                                    Quản lý đơn hàng
                                </a>
                                <a
                                    className="nav-link text-white"
                                    href="/feedback"
                                >
                                    <i className="bi bi-chat-left-text-fill me-2" />
                                    Quản lý bình luận
                                </a>
                            </nav>
                            <hr />
                        </div>
                        <div className="col-12 bg-dark text-white p-3 dropdown-content">
                            <h3 className="text-center">
                                <span className="text-danger">
                                    DLHL
                                </span>
                                <span>
                                    {' '}SHOP
                                </span>
                            </h3>
                            <hr />
                            <div className="dropdown">
                                <button
                                    aria-expanded="false"
                                    className="btn btn-danger w-100 dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    id="dropdownMenuButton"
                                    type="button"
                                >
                                    Quản lý Menu
                                </button>
                                <ul
                                    aria-labelledby="dropdownMenuButton"
                                    className="dropdown-menu w-100"
                                >
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/statistic"
                                        >
                                            <i className="bi bi-pie-chart-fill me-2" />
                                            Quản lý thống kê
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/categories"
                                        >
                                            <i className="bi bi-tag-fill me-2" />
                                            Quản lý danh mục
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/products"
                                        >
                                            <i className="bi bi-box-seam me-2" />
                                            Quản lý sản phẩm
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/users"
                                        >
                                            <i className="bi bi-people-fill me-2" />
                                            Quản lý người dùng
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/order"
                                        >
                                            <i className="bi bi-cart-fill me-2" />
                                            Quản lý đơn hàng
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/feedback"
                                        >
                                            <i className="bi bi-chat-left-text-fill me-2" />
                                            Quản lý bình luận
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <hr />

                        </div>
                        <div className="col-lg-10 col-md-9">
                            <div className="shadow bg-danger text-white d-flex justify-content-between align-items-center p-3">
                                <p className="m-0">
                                    TRANG QUẢN TRỊ WEBSITE DLHL SHOP
                                </p>
                                <div>
                                    <a
                                        className="dk"
                                        href="/users/login"
                                    >
                                        Đăng nhập
                                    </a>
                                    <a
                                        className="dk"
                                        href="/users/register"
                                    >
                                        Đăng ký
                                    </a>
                                </div>
                            </div>
                            {children}
                        </div>
                        {/* {children} */}
                    </div>
                </div>
            </body>
        </>
    );
};

export default Admin;
