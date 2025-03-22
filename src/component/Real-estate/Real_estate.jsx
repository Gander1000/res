import scss from "./Real_estate.module.scss";
import image_mob from "../../assets/real_eatate_14.svg";
import image_16 from "../../assets/4_card_news_16.svg";
import image_17 from "../../assets/4_card_news_17.svg";
import image_18 from "../../assets/4_card_news_18.svg";
import image_19 from "../../assets/4_card_news_19.svg";

function Real_estate() {
  return (
    <section className={scss.Real_estate}>
      <div className={scss.contei_logo}>
        <div className={scss.logo}>
          <h1 className={scss.h1}>НЕДВИЖИМОСТЬ</h1>
          <hr />
        </div>
      </div>
      <div className={scss.cart}>
        <img src={image_16} alt="" />
        <img src={image_17} alt="" />
        <img src={image_18} alt="" />
        <img src={image_19} alt="" />
        <img src={image_16} alt="" />
        <img src={image_17} alt="" />
        <img src={image_18} alt="" />
        <img src={image_19} alt="" />
      </div>
    </section>
  );
}

export default Real_estate;
