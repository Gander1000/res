import scss from "./Founder.module.scss";
import next from "../../assets/next.svg";
import image from "../../assets/4_card_news_8.svg";
import image_1 from "../../assets/4_card_news_9.svg";
import image_2 from "../../assets/4_card_news_10.svg";
import image_3 from "../../assets/4_card_news_11.svg";

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
          <img className={scss.Popular} src={image} alt="1" />
          <img className={scss.Popular} src={image_1} alt="" />
          <img className={scss.Popular} src={image_2} alt="" />
          <img className={scss.Popular} src={image_3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Founder;
