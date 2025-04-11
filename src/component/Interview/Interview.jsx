import { redirect } from "react-router-dom";
import scss from "./Interview.module.scss";
import image from "../../assets/photo29.svg";
import image_1 from "../../assets/photo30.svg";
import image_2 from "../../assets/photo31.svg";
import image_3 from "../../assets/photo32.svg";
import Ellipse from "../../assets/Ellipse.svg";

function Interview() {
  return (
    <section className={scss.Interview}>
      <div className={scss.logo}>
        <h1 className={scss.h1}>ИНТЕРВЬЮ</h1>
        <hr className={scss.hr} />
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
    </section>
  );
}

export default Interview;
