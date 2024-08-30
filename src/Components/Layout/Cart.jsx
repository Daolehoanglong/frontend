import React, { useEffect, useState } from 'react';
import "./Cart.css"
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const [City, setCity] = useState([])
    const [District, setDistrict] = useState([])
    const [Ward, setWard] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCity = async () => {
            try {
                const response = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
                const data = await response.json();
                setCity(data.data);
            } catch (error) {
                console.error('Error fetch', error);
            }
        }
        fetchCity()
    }, [])
    // console.log(City);

    const handleidCity = (event) => {
        const id = event.target.value
        console.log("city", id);

        window.localStorage.setItem("CityID", JSON.stringify(id));
        const fetchDistrict = async () => {
            try {
                const response = await fetch(`https://esgoo.net/api-tinhthanh/2/${id}.htm`)
                console.log(response);

                const data = await response.json();
                setDistrict(data.data);
            } catch (error) {
                console.error('Error fetch', error);
            }
        }
        fetchDistrict()
    }
    const handleidDistrict = (event) => {
        const id = event.target.value
        console.log("district", id);
        window.localStorage.setItem("DistrictID", JSON.stringify(id));
        const fetchWard = async () => {
            try {
                const response = await fetch(`https://esgoo.net/api-tinhthanh/3/${id}.htm`)
                console.log(response);
                const data = await response.json();
                setWard(data.data);
            } catch (error) {
                console.error('Error fetch', error);
            }
        }
        fetchWard()
    }
    const handleidWard = (event) => {
        const id = event.target.value
        console.log("ward", id);
        window.localStorage.setItem("WardID", JSON.stringify(id));
    }
    const showCity = City.map((item, index) => {
        return (
            <>
                <option value={item.id} key={index}>
                    {item.name}
                </option>
            </>
        )
    })
    const showDistrict = District.map((item, index) => {
        return (
            <>
                <option value={item.id} key={index}>
                    {item.name}
                </option>
            </>
        )
    })
    const showWard = Ward.map((item, index) => {
        return (
            <>
                <option value={item.id} key={index}>
                    {item.name}
                </option>
            </>
        )
    })
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = (id) => {
        item.map((item) => {
            if (item.id == id) {
                if (item.quantity > 1) {
                    item.quantity--
                    setQuantity(item.quantity);
                }
            }
        })
        window.localStorage.setItem("cart", JSON.stringify(item));
    };
    const handleIncrement = (id) => {
        console.log(id);
        item.map((item) => {
            if (item.id == id) {
                item.quantity++
                setQuantity(item.quantity);
            }
        })
        window.localStorage.setItem("cart", JSON.stringify(item));
    };
    const [removes, setremove] = useState([])
    const RemoveCart = (id) => {
        const remove = item.filter((item) => item.id !== id)
        setremove(remove)
        window.localStorage.setItem("cart", JSON.stringify(remove));
    }
    const item = JSON.parse(window.localStorage.getItem("cart"))
    const [CartItem, setCartItem] = useState(item)
    useEffect(() => {
        setCartItem(CartItem);
    }, [CartItem]);
    var Total = 0
    var truePrice = 0
    var showCart
    if (item && Array.isArray(item)) {
        showCart = item.map((item, index) => {
            truePrice = item.price * item.quantity
            Total += truePrice
            return (
                <div className="row no-gutters" key={index}>
                    <div className="col-md-4">
                        <img
                            alt="Product Image"
                            className="card-img"
                            src={`../img/${item.img[0]}`}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {item.name}
                            </h5>
                            <p className="card-text">
                                {item.decription}
                            </p>
                            {/* <p>
                                {item.price+item.price}
                            </p> */}
                            <p className="card-text">
                                <small className="text-muted">
                                    Price: {item.price * item.quantity}.000 VND
                                </small>
                            </p>
                            <div className="quantity-input">
                                <button onClick={() => handleDecrement(item.id)} className="btn-minus">
                                    -
                                </button>
                                <div>
                                    {item.quantity}
                                </div>
                                <button onClick={() => handleIncrement(item.id)} className="btn-plus">
                                    +
                                </button>
                            </div>
                            <button
                                className="btn btn-danger btn-sm"
                                type="button"
                                onClick={() => RemoveCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )
        });

    } else {
        showCart = <div>Cart is empty</div>;
    }
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [cart, setCart] = useState(null);
    const BuyCart = async (e) => {
        e.preventDefault();
        const CityID = JSON.parse(window.localStorage.getItem("CityID"));
        const DistrictID = JSON.parse(window.localStorage.getItem("DistrictID"));
        const WardID = JSON.parse(window.localStorage.getItem("WardID"));
        const CityName = City.filter(city => city.id === CityID)
        const DistrictName = District.filter(district => district.id === DistrictID)
        const WardName = Ward.filter(ward => ward.id === WardID)
        const city = CityName[0].name
        const district = DistrictName[0].name
        const ward = WardName[0].name
        try {
            const response = await fetch('http://localhost:3000/products/addCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name, Phone, Email, Address, city, district, ward, Total }),
            });
            if (response.ok) {
                setName('');
                setPhone('');
                setEmail('');
                setAddress('')
                const newCart = await response.json();
                setCart(newCart); // Cập nhật state với dữ liệu mới được thêm
                // console.log('Cart updatedsss:', newCart);
                Bill(newCart)
            } else {
                // Xử lý lỗi
                console.error('Error adding product:', await response.json());
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }
    const Bill = async (newCart) => {
        const responses = await Promise.all(item.map(async (item) => {
            const Name = item.name
            const Price = item.price
            const idCart = newCart.id
            const response = await fetch('http://localhost:3000/products/addBill', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name, Price, idCart, Total }),
            });
            // Kiểm tra phản hồi và trả về dữ liệu
            if (response.ok) {
                console.log("successfully");
                localStorage.removeItem('cart')
                localStorage.removeItem('CityID')
                localStorage.removeItem('DistrictID')
                localStorage.removeItem('WardID')
                navigate('/')
                return await response.json();
            } else {
                // Xử lý lỗi nếu có
                throw new Error(`Error: ${response.statusText}`);
            }
        }));
        console.log('Responses:', responses);

    }

    return (
        <>
            <div className="container my-5">
                <form onSubmit={BuyCart}>
                    <div className="row h">
                        <div className="col-md-6">
                            <h2>
                                Cart Info
                            </h2>
                            <div className="form-group">
                                <label htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    className="form-control"
                                    // defaultValue=""
                                    id="name"
                                    type="text"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">
                                    Phone:
                                </label>
                                <input
                                    className="form-control"
                                    // defaultValue=""
                                    id="phone"
                                    type="tel"
                                    value={Phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    className="form-control"
                                    defaultValue=""
                                    id="email"
                                    type="email"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">
                                    Address:
                                </label>
                                <input
                                    className="form-control"
                                    defaultValue=""
                                    id="address"
                                    type="text"
                                    value={Address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="address-fields">
                                <div className="form-group">
                                    <label htmlFor="city">
                                        City:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="city"
                                        onChange={handleidCity}

                                    >
                                        {showCity}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="district">
                                        District:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="district"
                                        onChange={handleidDistrict}
                                    >
                                        {showDistrict}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ward">
                                        Ward:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="ward"
                                        onChange={handleidWard}
                                    >
                                        {showWard}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group payment-options">
                                <div>
                                    <input
                                        defaultValue="momo"
                                        id="momo"
                                        name="payment"
                                        type="radio"
                                    />
                                    <label htmlFor="momo">
                                        MoMo
                                    </label>
                                </div>
                                <div>
                                    <input
                                        defaultValue="cash"
                                        id="cash"
                                        name="payment"
                                        type="radio"
                                    />
                                    <label htmlFor="cash">
                                        Cash on Delivery
                                    </label>
                                </div>
                                <div>
                                    <input
                                        defaultValue="card"
                                        id="card"
                                        name="payment"
                                        type="radio"
                                    />
                                    <label htmlFor="card">
                                        Credit Card
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2>
                                Cart Items
                            </h2>
                            <div className="card mb-3">
                                {showCart}
                            </div>
                            <div className="row">
                                <div className="col-md-6 offset-md-6 text-right">
                                    <h5>
                                        Total:{' '}
                                        <span id="total-price">
                                            {Total}.000 VND
                                        </span>
                                    </h5>
                                    <button type="submit" className='text-dark bg-light'>Mua</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}
export default Cart