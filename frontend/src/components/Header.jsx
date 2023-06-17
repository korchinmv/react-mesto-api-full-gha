import { useLocation, Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ register, login, logout, loggedIn, userData, logOut }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <img className="header__logo" src={logo} alt="Логотип Mesto" />

          {loggedIn ? (
            <>
              <div className="header__user">
                <span className="header__user-name">{userData}</span>
                <button
                  className="header__button header__button_logout hover"
                  onClick={logOut}
                >
                  {logout}
                </button>
              </div>
            </>
          ) : (
            <>
              {location.pathname === "/sign-up" ? (
                <Link className="header__button hover" to="/sign-in">
                  {login}
                </Link>
              ) : (
                <Link className="header__button hover" to="/sign-up">
                  {register}
                </Link>
              )}
            </>
          )}

          {}
        </div>
      </div>
    </header>
  );
}

export default Header;
