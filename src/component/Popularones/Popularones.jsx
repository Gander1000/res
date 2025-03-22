import scss from "./Popularones.module.scss";
import next from "../../assets/next.svg";
import image from "../../assets/4_card_news.svg";
import image_1 from "../../assets/4_card_news_1.svg";
import image_2 from "../../assets/4_card_news_2.svg";
import image_3 from "../../assets/4_card_news_3.svg";

function Popularones() {
  return (
    <section className={scss.Popularones}>
      <div className={scss.contai}>
        <div className={scss.contai_logo}>
          <div className={scss.logo}>
            <h1 className={scss.h1}>ПОПУЛЯРНЫЕ</h1>
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

export default Popularones;
