import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scss from "./Heder.module.scss";
import image from "../../assets/arrow.svg";
import search from "../../assets/search.svg";
import Logo from "../../assets/Logo_resident_text.svg";
import menu from "../../assets/burger_menu.svg";
import close from "../../assets/close.svg";

const Heder = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 360);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <section className={scss.Heder}>
      <div className={scss.container}>
        <Link to="/">
          <div>
            <img className={scss.Hed} src={Logo} alt="" />
          </div>
        </Link>
        <nav className={scss.navbar}>
          <Link
            to="/Real_estate"
            className={scss.a_a}
            onClick={() => toggleDropdown(0)}
          >
            НЕДВИЖИМОСТЬ
            <img
              className={`${scss.Clic} ${activeIndex === 0 ? scss.active : ""}`}
              src={image}
              alt=""
            />
          </Link>
          <div className={scss.menuItem}>
            <div
              className={scss.menuItem}
              onMouseEnter={() => setOpenSubMenu(1)}
              onMouseLeave={() => setOpenSubMenu(null)}
            >
              <a className={scss.a_a}>
                РОСКОШНЫЙ ОТДЫХ
                <img
                  className={`${scss.Clic} ${
                    openSubMenu === 1 ? scss.active : ""
                  }`}
                  src={image}
                  alt=""
                />
              </a>
              <div
                className={`${scss.dropdown} ${
                  openSubMenu === 1 ? scss.show : ""
                }`}
              >
                <Link className={scss.a_s} to="/Luxury_vacation">
                  ОТЕЛИ
                </Link>
                <a className={scss.a_s} href="#">
                  РЕСТОРАНЫ
                </a>
                <Link className={scss.a_s} to="/LuxuryVacation">
                  СПА-САЛОНЫ
                </Link>
              </div>
            </div>

            {activeIndex === 1 && (
              <div className={scss.dropdown}>
                <Link className={scss.a_a} to="/Luxury_vacation">
                  ОТЕЛИ
                </Link>
                <a className={scss.a_a} href="#">
                  РЕСТОРАНЫ
                </a>
                <Link className={scss.a_a} to="/LuxuryVacation">
                  СПА-САЛОНЫ
                </Link>
              </div>
            )}

            {activeIndex === 1 && (
              <div className={scss.dropdown}>
                <Link className={scss.a_a} to="/Luxury_vacation">
                  ОТЕЛИ
                </Link>
                <a className={scss.a_a} href="#">
                  РЕСТОРАНЫ
                </a>
                <Link className={scss.a_a} to="/LuxuryVacation">
                  СПА-САЛОНЫ
                </Link>
              </div>
            )}
          </div>
          <a className={scss.a_a} href="#" onClick={() => toggleDropdown(2)}>
            ДИЗАЙН
            <img
              className={`${scss.Clic} ${activeIndex === 2 ? scss.active : ""}`}
              src={image}
              alt=""
            />
          </a>
          <div className={scss.container_a}>
            <a className={scss.a_a} href="#">
              ПРОДУКТЫ
            </a>
            <Link className={scss.a_a} to="/Interview">
              ИНТЕРВЬЮ
            </Link>
            <Link className={scss.a_a} to="/Contacts">
              КОНТАКТЫ
            </Link>
          </div>
        </nav>
        <div className={scss.sc}>
          <div
            className={scss.menuItem}
            onMouseEnter={() => setTariffsDropdownVisible(true)}
            onMouseLeave={() => setTariffsDropdownVisible(false)}
          >
            <img
              className={scss.sc}
              src={search || "default-image.png"}
              alt="Search"
              onClick={() => setSearchOpen(true)}
            />
            {isSearchOpen && (
              <div className={scss.dropdownContainer}>
                <div className={scss.schContainer}>
                  <input
                    type="text"
                    className={scss.schInput}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Поиск"
                  />
                  <span className={scss.schIcon}>
                    <img
                      className={scss.sch_input}
                      src={search || "default-image.png"}
                      alt="Search Icon"
                    />
                  </span>
                  <div>
                    <img
                      src={close || "default-image.png"}
                      alt="Close Icon"
                      className={scss.clIcon}
                      onClick={() => setSearchOpen(false)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={scss.Heder_mob}>
        {isMenuOpen && <div className={scss.blurBackground}></div>}

        <div className={scss.menuItem}>
          <img
            src={menu || "default-image.png"}
            alt="Menu"
            onClick={toggleMenu}
            className={scss.menuIcon}
          />
          {isMenuOpen && (
            <div className={scss.dropdownContai}>
              <div className={scss.dropdowne}>
                <nav className={scss.navbar}>
                  <img
                    className={scss.closeIcon}
                    src={close || "default-image.png"}
                    alt="Close"
                    onClick={closeMenu}
                  />
                  <div className={scss.menuItem}>
                    <Link
                      className={scss.a_a}
                      href="#"
                      onClick={() => toggleSubMenu(3)}
                      to="/Real_estate"
                    >
                      НЕДВИЖИМОСТЬ
                      <img
                        className={`${scss.Clic} ${
                          openSubMenu === 3 ? scss.active : ""
                        }`}
                        src={image || "default-image.png"}
                        alt="Arrow"
                      />
                    </Link>
                  </div>

                  <div className={scss.menuItem}>
                    <Link
                      to=""
                      className={`${scss.a_a} ${
                        openSubMenu === 2 ? scss.expanded : ""
                      }`}
                      href="#"
                      onClick={() => toggleSubMenu(2)}
                    >
                      РОСКОШНЫЙ ОТДЫХ
                      <img
                        className={`${scss.Clic} ${
                          openSubMenu === 2 ? scss.active : ""
                        }`}
                        src={image || "default-image.png"}
                        alt="Arrow"
                      />
                    </Link>
                    {openSubMenu === 2 && (
                      <div className={scss.submenu}>
                        <Link className={scss.a_s} to="/Luxury_vacation">
                          ОТЕЛИ
                        </Link>
                        <a className={scss.a_s} href="#">
                          РЕСТОРАНЫ
                        </a>
                        <Link className={scss.a_s} to="/LuxuryVacation">
                          СПА-САЛОНЫ
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className={scss.menuItem}>
                    <a
                      className={scss.a_a}
                      href="#"
                      onClick={() => toggleSubMenu(3)}
                    >
                      ДИЗАЙН
                      <img
                        className={`${scss.Clic} ${
                          openSubMenu === 3 ? scss.active : ""
                        }`}
                        src={image || "default-image.png"}
                        alt="Arrow"
                      />
                    </a>
                  </div>

                  <div className={scss.menuItem}>
                    <a
                      className={scss.a_a}
                      href="#"
                      onClick={() => toggleSubMenu(4)}
                    >
                      ПРОДУКТЫ
                      <img
                        className={`${scss.Clic} ${
                          openSubMenu === 4 ? scss.active : ""
                        }`}
                        src={image || "default-image.png"}
                        alt="Arrow"
                      />
                    </a>
                  </div>

                  <div className={scss.menuItem}>
                    <Link
                      to="/Interview"
                      className={scss.a_a}
                      href="#"
                      onClick={() => toggleSubMenu(5)}
                    >
                      ИНТЕРВЬЮ
                      <img
                        className={`${scss.Clic} ${
                          openSubMenu === 5 ? scss.active : ""
                        }`}
                        src={image || "default-image.png"}
                        alt="Arrow"
                      />
                    </Link>
                  </div>

                  <div className={scss.menuItem}>
                    <Link
                      to="/Contacts"
                      className={scss.a_a}
                      href="#"
                      onClick={() => toggleSubMenu(6)}
                    >
                      КОНТАКТЫ
                      <img
                        className={`${scss.Clic} ${
                          openSubMenu === 6 ? scss.active : ""
                        }`}
                        src={image || "default-image.png"}
                        alt="Arrow"
                      />
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>

        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className={scss.searc}>
          <div
            className={scss.menuItem}
            onMouseEnter={() => setTariffsDropdownVisible(true)}
            onMouseLeave={() => setTariffsDropdownVisible(false)}
          >
            <img
              className={scss.searc}
              src={search || "default-image.png"}
              alt="Search"
              onClick={() => setSearchOpen(true)}
            />
            {isSearchOpen && (
              <div className={scss.dropdownContainer}>
                <div className={scss.searchContainer}>
                  <input
                    type="text"
                    className={scss.searchInput}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Поиск"
                  />
                  <span className={scss.searchIcon}>
                    <img
                      className={scss.search_input}
                      src={search || "default-image.png"}
                      alt="Search Icon"
                    />
                  </span>
                  <div>
                    <img
                      src={close || "default-image.png"}
                      alt="Close Icon"
                      className={scss.clearIcon}
                      onClick={() => setSearchOpen(false)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heder;
