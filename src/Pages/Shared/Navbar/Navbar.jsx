import { NavLink } from "react-router-dom";
import cart from "../../../assets/images/cart.svg";
import Avatar from "../../../components/avatar/Avatar";
import Logo from "../../../components/logo/Logo";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.main__header}>
      <div className={`custom__container `}>
       <div className= {`d-flex justify-content-space-between align-items-center`}>
       <div className={`w-100 `}>
          <Logo />
        </div>

        <nav >
          <ul className={`list-unstyled d-flex justify-content-end align-items-center `}>
            <li>
              <NavLink>
                <img src={cart} alt="cart"  width={20} height={20} />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.44V9.77"
                    stroke="#ADA7A7"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
                    stroke="#ADA7A7"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.65004 21.17C9.05004 20.57 8.67004 19.73 8.67004 18.82"
                    stroke="#ADA7A7"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </NavLink>
            </li>
            <li
              aria-label="avatar dropdown"
              aria-labelledby="avatar dropdown menu"
              aria-describedby="avatar dropdown menu"
            >
              <Avatar />
            </li>
          </ul>
        </nav>
       </div>
      </div>
    </header>
  );
};

export default Navbar;
