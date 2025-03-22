import { Link } from "react-router-dom";
import scss from "./Luxury_vacation.module.scss";
import hotel from "../../assets/banner_hotel.svg";
import content from "../../assets/content.svg";
import real_eatate_hotel from "../../assets/real_eatate_hotel.svg";
import Frame from "../../assets/Frame.svg";
import Group from "../../assets/Group.svg";
import review from "../../assets/review.svg";
import review_a from "../../assets/review_a.svg";
import Ellipse from "../../assets/Ellipse.svg";
import real_eatate_15 from "../../assets/real_eatate_15.svg";

function Luxury_vacation () {
    return(
        <section className={scss.Luxury_vacation}>
            <Link className={scss.a_a} to="/">
               <img className={scss.Group} src={Group} alt="" />
            </Link>
            <div className={scss.container}>
                <p className={scss.p}>РОСКОШНЫЙ ОТДЫХ</p>
                <h1 className={scss.h1}>ОТЕЛЬ ОРИОН-НЕ ТОЛКО МЕСТО ДЛЯ ОТДЫХА</h1>

                <div className={scss.logo}>
                    <p>АЛИНА ИРИСОВА</p>
                    <span>1 ФЕВРАЛЯ 2024 <img src={Ellipse} alt="" /> 5 МИН</span>
                </div>
                <div>
                    <img className={scss.hotel} src={hotel} alt=""/>
                </div>
                <div className={scss.container_title}>
                    <img className={scss.content} src={content} alt="" />
                    <div>
                    <img className={scss.real_eatate_hotel} src={real_eatate_hotel} alt="" />
                    </div>
                    <img className={scss.Teg} src={Frame} alt="" />
                </div>
                <div>
                    <img className={scss.coment_mob} src={real_eatate_15} alt="" />
                </div>
                <div className={scss.coment}>
                    <h1>ОТЗЫВЫ</h1>
                    <input className={scss.inp_a} type="text" placeholder="Имя и фамилия" />
                    <input className={scss.inp_b} type="text" name="" id="" placeholder="Напишите отзыв о статье" />
                    <button>ДОБАВИТЬ</button>
                </div>
                <div className={scss.container_img}>
                    <img className={scss.coment_a} src={review_a} alt="" />
                    <img src={review} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Luxury_vacation