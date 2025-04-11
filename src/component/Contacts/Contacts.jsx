import scss from "./Contacts.module.scss";
import Logo from "../../assets/interview.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Insta from "../../assets/Insta.svg";
import Tic_tok from "../../assets/Tic_tok.svg";

function Contacts() {
  return (
    <section className={scss.Contacts}>
      <div className={scss.contai}>
        <img className={scss.Logo} src={Logo} alt="" />
        <div className={scss.container}>
          <div className={scss.contei_contac}>
            <button>контакты</button>
            <h1>г. Бишкек, ул. Нуркамала 29</h1>
            <h5>График работы: с 9:00 до 20:00</h5>
          </div>
          <div className={scss.Linc}>
            <a href="">journal.resident.kg@gmail.com</a>
            <a href="">pr.resident.kg@gmail.com</a>
            <a href="">hr.resident.kg@gmail.com</a>
          </div>
          <div className={scss.contei_sv}>
            <div className={scss.cub_a}>
              <p>Почтовый индекс:</p>
              <p>Владелец и издатель:</p>
              <p>Регистрационный номер:</p>
              <p>Свидетельство:</p>
            </div>
            <div className={scss.cub_b}>
              <span>720049</span>
              <span>ОсОО «Trust house C.A. real estate»</span>
              <span>10308</span>
              <span>#000758</span>
            </div>
          </div>
          <div className={scss.container_Linc}>
            <div className={scss.mes}>
              <a href="">
                <img src={Facebook} alt="" />
              </a>
              <a href="">
                <img src={Twitter} alt="" />
              </a>
              <a href="">
                <img src={Insta} alt="" />
              </a>
              <a href="">
                <img src={Tic_tok} alt="" />
              </a>
            </div>
            <p>Журнал зарегистрирован в Министерстве юстиции КР</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
