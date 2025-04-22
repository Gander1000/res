import { Link } from "react-router-dom";
import scss from "./Foter.module.scss";
import Logo from "../../assets/Logo_resident_text.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Insta from "../../assets/Insta.svg";
import Tic_tok from "../../assets/Tic_tok.svg";
import resident from "../../assets/resident_mob.svg";

function Foter() {
  return (
    <section className={scss.Foter}>
      <div className={scss.container}>
        <a href="">
          <img className={scss.Logo} src={Logo} alt="Logo_RES" />
        </a>
        <div className={scss.socialnetworks}>
          <a className={scss.Fot} href="">
            <img src={Facebook} alt="" />
          </a>
          <a className={scss.Fot} href="">
            <img src={Twitter} alt="" />
          </a>
          <a className={scss.Fot} href="">
            <img src={Insta} alt="" />
          </a>
          <a className={scss.Fot} href="">
            <img src={Tic_tok} alt="" />
          </a>
        </div>
      </div>
      <hr className={scss.Lini} />
      <div className={scss.container_a}>
        <div>
          <p>
            - ваш гид в мире строительства, объединяющий всех, кто стремится
            создавать надежные и удобные дома, а также поможет читателям
            расширить свой кругозор и узнать что-то новое
          </p>
        </div>
        <div className={scss.container_b}>
          <div className={scss.links}>
            <h1 className={scss.h1}>Категории:</h1>
            <Link to="/Real_estate">Недвижимость</Link>
            <Link to="">Роскошный отдых</Link>
            <Link to="Interview">Интервью</Link>
            <Link to="">Дизайн</Link>
            <Link to="">Продукты</Link>
          </div>
          <div className={scss.links}>
            <h1 className={scss.h1}>Компания:</h1>
            <Link to="/Adout_us">О нас</Link>
            <Link to="/Contacts">Контакты</Link>
          </div>
        </div>
        <div className={scss.data}>
          <a className={scss.adres} href="">
            <h1 className={scss.h1_a}>
              г. Бишкек, ул. <br /> Нуркамала 29
            </h1>
          </a>
          <p>График работы: с 9:00 до 20:00</p>
          <a href="">JOURNAL.RESIDENT.KG@GMAIL.COM</a>
        </div>
      </div>
      <p className={scss.Foter_p}>Все права защищены</p>
    </section>
  );
}

export default Foter;
