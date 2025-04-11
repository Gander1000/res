import scss from "./Founder.module.scss";
import next from "../../assets/next.svg";
import image from "../../assets/photo12.svg";
import image_1 from "../../assets/photo13.svg";
import image_2 from "../../assets/photo14.svg";
import image_3 from "../../assets/photo15.svg";
import Ellipse from "../../assets/Ellipse.svg";

function Founder() {
  return (
    <section className={scss.Founder}>
      <div className={scss.contai}>
        <div className={scss.contai_logo}>
          <div className={scss.logo}>
            <h1 className={scss.h1}>ИНТЕРВЬЮ</h1>
            <img className={scss.next} src={next} alt="" />
            <hr />
          </div>
        </div>
        <div className={scss.container}>
          <div className={scss.cub_img}>
            <img className={scss.Popular} src={image} alt="1" />
            <p>НЕДВИЖИМОСТЬ</p>
            <span>Москва - жилой дом премиум-класса в Кыргызстане</span>
            <h6>
              1 февраля 2024
              <img src={Ellipse} alt="" />3 мин
            </h6>
          </div>
          <div className={scss.cub_img}>
            <img className={scss.Popular} src={image_1} alt="1" />
            <p>НЕДВИЖИМОСТЬ</p>
            <span>UNO City - новый город-курорт в Кыргызстане</span>
            <h6>
              1 февраля 2024
              <img src={Ellipse} alt="" />3 мин
            </h6>
          </div>
          <div className={scss.cub_img}>
            <img className={scss.Popular} src={image_2} alt="1" />
            <p>НЕДВИЖИМОСТЬ</p>
            <span>Взять квартиру в ипотеку в Бишкеке: миссия выполнима?</span>
            <h6>
              1 февраля 2024
              <img src={Ellipse} alt="" />3 мин
            </h6>
          </div>
          <div className={scss.cub_img}>
            <img className={scss.Popular} src={image_3} alt="1" />
            <p>НЕДВИЖИМОСТЬ</p>
            <span>Секреты Дубай, недвижимость за рубежом в Кыргызстане</span>
            <h6>
              1 февраля 2024
              <img src={Ellipse} alt="" />3 мин
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
