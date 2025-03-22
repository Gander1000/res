import scss from "./Rest.module.scss";
import next from "../../assets/next.svg";
import hotel from "../../assets/hotel_3.svg";
import title from "../../assets/1_tit.svg";
import title_a from "../../assets/2_tit.svg";
import title_b from "../../assets/3_tit.svg";
import title_d from "../../assets/4_tit.svg";
import image_4 from "../../assets/4_card_news_4.svg";
import image_5 from "../../assets/4_card_news_5.svg";
import image_6 from "../../assets/4_card_news_6.svg";
import image_7 from "../../assets/4_card_news_7.svg";
import image_8 from "../../assets/1_9.svg";
import image_9 from "../../assets/real_eatate_12.svg";

function Rest() {
  return (
    <section className={scss.Rest}>
      <div className={scss.contai}>
        <div className={scss.contai_logo}>
          <div className={scss.logo}>
            <h1 className={scss.h1}>РАСКОШНЫЙ ОДТЫХ</h1>
            <img className={scss.next} src={next} alt="" />
            <hr />
          </div>
        </div>
        <div className={scss.container}>
          <img className={scss.Resta} src={hotel} alt="" />
          <div className={scss.container_title}>
            <img className={scss.Res} src={title} alt="" />
            <img className={scss.Res} src={title_a} alt="" />
            <img className={scss.Res} src={title_b} alt="" />
            <img className={scss.Res} src={title_d} alt="" />
          </div>
        </div>
        <div className={scss.Popular_con}>
          <img className={scss.Popular} src={image_4} alt="1" />
          <img className={scss.Popular} src={image_5} alt="" />
          <img className={scss.Popular} src={image_6} alt="" />
          <img className={scss.Popular} src={image_7} alt="" />
        </div>
        <div className={scss.Popular_con_a}>
          <img className={scss.Popular} src={image_8} alt="1" />
          <img className={scss.Popular} src={image_9} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Rest;
