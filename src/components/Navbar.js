import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  let { quantity } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Shopping Cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{quantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
