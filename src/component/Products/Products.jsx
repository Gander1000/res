import scss from "./Products.module.scss";
import next from "../../assets/next.svg";
import title from "../../assets/1_tit.svg";
import title_a from "../../assets/2_tit.svg";
import title_b from "../../assets/3_tit.svg";
import title_d from "../../assets/4_tit.svg";
import hotel from "../../assets/hotel_1.svg";
import card from "../../assets/4_card_news_12.svg";
import card_a from "../../assets/4_card_news_13.svg";
import card_b from "../../assets/4_card_news_14.svg";
import card_d from "../../assets/4_card_news_15.svg";

function Products() {
  return (
    <section>
      <section className={scss.Products}>
        <div className={scss.contai}>
          <div className={scss.contai_logo}>
            <div className={scss.logo}>
              <h1 className={scss.h1}>ПРОДУКТЫ</h1>
              <img className={scss.next} src={next} alt="" />
              <hr />
            </div>
          </div>
          <div className={scss.container}>
            <img src={hotel} alt="" />
            <div>
              <img className={scss.Res} src={title} alt="" />
              <img className={scss.Res} src={title_a} alt="" />
              <img className={scss.Res} src={title_b} alt="" />
              <img className={scss.Res} src={title_d} alt="" />
            </div>
          </div>
          <div className={scss.Products_con}>
            <img src={card} alt="" />
            <img src={card_a} alt="" />
            <img src={card_b} alt="" />
            <img src={card_d} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Products;
