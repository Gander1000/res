import scss from "./Rest.module.scss";
import next from "../../assets/next.svg";
import hotel from "../../assets/hotel_3.svg";
import image from "../../assets/photo8.svg";
import image_1 from "../../assets/photo9.svg";
import image_2 from "../../assets/photo10.svg";
import image_3 from "../../assets/photo11.svg";
import image_8 from "../../assets/1_9.svg";
import Ellipse from "../../assets/Ellipse.svg";

function Rest() {
  return (
    <section className={scss.Rest}>
      <div className={scss.contai}>
        <div className={scss.contai_logo}>
          <div className={scss.logo}>
            <h1 className={scss.h1}>РАСКОШНЫЙ ОДТЫХ</h1>
            <img className={scss.next} src={next} alt="" />
            <hr className={scss.hr}/>
          </div>
        </div>
        <div className={scss.container_body}>
          <img className={scss.Resta} src={hotel} alt="" />
          <div className={scss.container_title}>
            <div className={scss.contei_title}>
              <div className={scss.cub_title}>
                <p>НЕДВИЖИМОСТЬ</p>
                <span>
                  Галерея - отделочные материалы оптом и в розницу Все под одной
                  крышей{" "}
                </span>
                <h6>
                  1 февраля 2024
                  <img src={Ellipse} alt="" />3 мин
                </h6>
              </div>
              <div className={scss.cub_title}>
                <p>НЕДВИЖИМОСТЬ</p>
                <span>
                  Галерея - отделочные материалы оптом и в розницу Все под одной
                  крышей
                </span>
                <h6>
                  1 февраля 2024
                  <img src={Ellipse} alt="" />3 мин
                </h6>
              </div>
            </div>
            <div className={scss.contei_title}>
              <div className={scss.cub_title}>
                <p>НЕДВИЖИМОСТЬ</p>
                <span>
                  Все под одной крышей: стройматериалы, сантехника, инструменты,
                  электротовары и мн.
                </span>
                <h6>
                  1 февраля 2024
                  <img src={Ellipse} alt="" />3 мин
                </h6>
              </div>
              <div className={scss.cub_title}>
                <p>НЕДВИЖИМОСТЬ</p>
                <span>
                  Галерея - отделочные материалы оптом и в розницу Все под одной
                  крышей
                </span>
                <h6>
                  1 февраля 2024
                  <img src={Ellipse} alt="" />3 мин
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.conteiner}>
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
        <div className={scss.Popular_con_a}>
          <img className={scss.Popular} src={image_8} alt="1" />
        </div>
      </div>
    </section>
  );
}

export default Rest;
