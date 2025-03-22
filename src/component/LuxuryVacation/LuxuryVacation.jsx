import scss from "./LuxuryVacation.module.scss";
import Hotel from "../../assets/Hotel.svg";
import photo from "../../assets/photo.svg";
import photo_a from "../../assets/photo_a.svg";
import photo_b from "../../assets/photo_b.svg";
import photo_d from "../../assets/photo_d.svg"; 
import Ellipse from "../../assets/Ellipse.svg";
import real_eatate from "../../assets/real_eatate.svg";
import image from "../../assets/110.svg";
import real_eatate_13 from "../../assets/real_eatate_13.svg";

function LuxuryVacation () {
    return(
        <section className={scss.LuxuryVacation}>
             <h1 className={scss.logo}>РАСКОШНЫЙ ОДТЫХ</h1>
             <hr className={scss.Lini} />           
            <div className={scss.container}>
                <img className={scss.Hotel} src={Hotel} alt="" />
                <div className={scss.cub_image}>
                    <div className={scss.mini_cub}>
                    <img src={photo} alt="" />
                    <img src={photo_a} alt="" />
                    </div>
                    <div className={scss.Cub_title}>
                <div className={scss.title}>
                    <p>РАСКОШНЫЙ ОДТЫХ</p>
                    <h1>Sumbule - SPA центр <br /> незабываемого отдыха, <br /> красоты и здоровья</h1>
                    <span className={scss.time}>1 февраля 2024 <img src={Ellipse} alt="" /> 3 мин</span>
                </div>
                <div className={scss.title}>
                    <p>РАСКОШНЫЙ ОДТЫХ</p>
                    <h1>Palazzo - ресторан премиум- <br />класса</h1>
                    <span className={scss.time}>1 февраля 2024 <img src={Ellipse} alt="" /> 1 мин</span>
                </div>
                </div>
                    <div className={scss.mini_cub}>
                    <img src={photo_b} alt="" />
                    <img src={photo_d} alt="" />
                    </div>
                </div>
            </div>
            <div className={scss.container_mob}>
                <img className={scss.Lux} src={image} alt="" />
            </div>
            <div className={scss.container_a}>
                <div className={scss.image}>
                    <img src={real_eatate} alt="" />
                </div>
                <div className={scss.image_mob}>
                    <img className={scss.Lux} src={real_eatate_13} alt="" />
                </div>
            </div>
        </section>
    );
}

export default LuxuryVacation