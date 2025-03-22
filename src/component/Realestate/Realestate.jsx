import scss from "./Realestate.module.scss";
import next from "../../assets/next.svg";
import image_4 from "../../assets/4_card_news_4.svg";
import image_5 from "../../assets/4_card_news_5.svg";
import image_6 from "../../assets/4_card_news_6.svg";
import image_7 from "../../assets/4_card_news_7.svg";

function Realestate() {
  return (
    <section className={scss.Realestate}>
      <div className={scss.contai}>
        <div className={scss.contai_logo}>
          <div className={scss.logo}>
            <h1 className={scss.h1}>НЕДВИЖИМОСТЬ</h1>
            <img className={scss.next} src={next} alt="" />
            <hr />
          </div>
        </div>
        <div className={scss.container}>
          <img className={scss.Popular} src={image_4} alt="1" />
          <img className={scss.Popular} src={image_5} alt="" />
          <img className={scss.Popular} src={image_6} alt="" />
          <img className={scss.Popular} src={image_7} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Realestate;
