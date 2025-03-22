import { redirect } from "react-router-dom";
import scss from "./Interview.module.scss";
import card_20 from "../../assets/4_card_news_20.svg";
import card_21 from "../../assets/4_card_news_21.svg";
import card_22 from "../../assets/4_card_news_22.svg";
import card_23 from "../../assets/4_card_news_23.svg";

function Interview() {
  return (
    <section className={scss.Interview}>
      <div className={scss.logo}>
        <h1 className={scss.h1}>ИНТЕРВЬЮ</h1>
      </div>
      <hr className={scss.Lini} />
      <div className={scss.cart}>
        <img src={card_20} alt="" />
        <img src={card_21} alt="" />
        <img src={card_22} alt="" />
        <img src={card_23} alt="" />
      </div>
      <div className={scss.cart}>
        <img src={card_20} alt="" />
        <img src={card_21} alt="" />
        <img src={card_22} alt="" />
        <img src={card_23} alt="" />
      </div>
    </section>
  );
}

export default Interview;
