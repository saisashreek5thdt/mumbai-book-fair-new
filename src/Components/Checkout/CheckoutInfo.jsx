import { FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../../store/cartSlice";


export default function CheckoutInfo() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  {console.log(cartItems)};
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const trashSize = {
    fontSize: "32px"
  }


  return (
    <>
      <section className="cart-section">
        <div className="auto-container">
          {/* Cart Outer */}
          <div className="cart-outer">
            <div className="table-outer">
              <table className="cart-table">
                <thead className="cart-header">
                  <tr>
                    <th className="prod-column">Book Name</th>
                    <th className="price">Publisher Name</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>

                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="prod-column">
                          <div className="column-box">
                            <h6 className="prod-title">{item.name}</h6>
                          </div>
                        </td>
                        <td className="price">{item.publisher}</td>
                        <td className="qty item-quantity">
                          <div className="quantity-spinner">
                            <button type="button" className="minus">
                              <span className="fa fa-minus"></span>
                            </button>
                            <input
                              type="text"
                              name="product"
                              value="1"
                              className="prod_qty"
                            />
                            <button type="button" className="plus">
                              <span className="fa fa-plus"></span>
                            </button>
                          </div>
                        </td>
                        <td className="remove">
                          <a href="#" className="remove-btn">
                            {/* <span className="fa fa-regular fa-trash"></span> */}
                            <FiTrash2 style={trashSize} onClick={() => handleRemoveItem(item)} />
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">Your cart is empty.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Lower Box */}
            {/* <button onClick={handleClearCart}>Clear Cart</button> */}
          </div>
          {/* End Cart Outer */}

          {/* Lower Box */}
          <div className="lower-box">
            <div className="row clearfix">
              {/* Shippling Column */}
              <div className="shipping-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h5>Customer Information</h5>

                  {/* Shipping Form */}
                  <div className="shipping-form">
                    <form method="post" action="contact.html">
                      <div className="row clearfix">
                        {/* Form Group */}
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="First Name"
                            placeholder="Enter First Name"
                            required=""
                          />
                        </div>

                        {/* Form Group */}
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="Last Name"
                            placeholder="Enter Last Name"
                            required=""
                          />
                        </div>

                        {/* Form Group */}
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <label>Phone Number</label>
                          <input
                            type="tel"
                            name="Phone Number"
                            placeholder="Enter Phone Number"
                            required=""
                          />
                        </div>

                        {/* Form Group */}
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <label>Email Address</label>
                          <input
                            type="email"
                            name="Email Address"
                            placeholder="Enter Email Address"
                            required=""
                          />
                        </div>

                        {/* Form Group */}
                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <label>Country</label>
                          <select className="custom-select-box">
                            <option>Select Country</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>England</option>
                            <option>Canada</option>
                            <option>Pakistan</option>
                          </select>
                        </div>

                        {/* Form Group */}
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <label>State</label>
                          <input
                            type="text"
                            name="username"
                            placeholder="State"
                            required=""
                          />
                        </div>

                        {/* Form Group */}
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <label>Zip Code</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Zip Code"
                            required=""
                          />
                        </div>

                        {/* Form Group */}
                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <button
                            className="theme-btn update-total-btn"
                            type="submit"
                            name="submit-form"
                          >
                            Complete Checkout
                          </button>
                        </div>
                      </div>
                    </form>
                    <button  onClick={handleClearCart}>Clear Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


// PropTypes Validation
CheckoutInfo.propTypes = {
  bookDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
  }),
};