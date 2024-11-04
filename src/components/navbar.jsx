import logo from "../imgs/Logo.png";
import { FaVk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Boom-Avto" className="logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#">Каталог</a>
        </li>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Новости</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
        <li>
          <a href="#">Избранные</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Поиск по названию"
          className="search-input"
        />
        <a href="#" className="social-link">
          <FaVk />
        </a>
        <a href="#" className="social-link">
          <FaWhatsapp />
        </a>
        <button className="request-btn">Оставить заявку</button>
      </div>
    </nav>
  );
}

export default Navbar;
