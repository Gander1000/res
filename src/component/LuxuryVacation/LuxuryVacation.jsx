import scss from "./LuxuryVacation.module.scss";
import Hotel from "../../assets/Hotel.svg";
import photo from "../../assets/photo.svg";
import photo_a from "../../assets/photo_a.svg";
import photo_b from "../../assets/photo_b.svg";
import photo_d from "../../assets/photo_d.svg";
import Ellipse from "../../assets/Ellipse.svg";
import image from "../../assets/photo20.svg";
import image_1 from "../../assets/photo21.svg";
import image_2 from "../../assets/photo22.svg";
import image_3 from "../../assets/photo23.svg";
import image_4 from "../../assets/photo24.svg";

function LuxuryVacation() {
  return (
    <section className={scss.LuxuryVacation}>
      <div className={scss.logo}>
        <h1>РАСКОШНЫЙ ОДТЫХ</h1>
        <hr />
      </div>
      <div className={scss.container}>
        <img className={scss.Hotel} src={Hotel} alt="" />
        <div className={scss.cub_image}>
          <div className={scss.mini_cub}>
            <div className={scss.cub_im}>
              <img src={photo} alt="" />
              <p>роскошный отдых</p>
              <span>
                Sumbule - SPA центр незабываемого отдыха, красоты и здоровья
              </span>
              <h6>
                1 февраля 2024
                <img src={Ellipse} alt="" />3 мин
              </h6>
            </div>
            <div className={scss.cub_im}>
              <img src={photo_a} alt="" />
              <p>роскошный отдых</p>
              <span>Palazzo - ресторан премиум-класса</span>
              <h6>
                1 февраля 2024
                <img src={Ellipse} alt="" />3 мин
              </h6>
            </div>
            <div className={scss.cub_im}>
              <img src={photo_b} alt="" />
            </div>
            <div className={scss.cub_im}>
              <img src={photo_d} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={scss.container_a}>
        <div className={scss.conteiner}>
          <div className={scss.cub_img}>
            <img className={scss.Popular} src={image_4} alt="1" />
            <p>НЕДВИЖИМОСТЬ</p>
            <span>Москва - жилой дом премиум-класса в Кыргызстане</span>
            <h6>
              1 февраля 2024
              <img src={Ellipse} alt="" />3 мин
            </h6>
          </div>
          <div className={scss.cub_img}>
            <img className={scss.Popular} src={image_3} alt="1" />
            <p>НЕДВИЖИМОСТЬ</p>
            <span>UNO City - новый город-курорт в Кыргызстане</span>
            <h6>
              1 февраля 2024
              <img src={Ellipse} alt="" />3 мин
            </h6>
          </div>
          <div className={scss.cub_img}>
            <img className={scss.Popular} src={image_4} alt="1" />
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
      </div>
    </section>
  );
}

export default LuxuryVacation;
