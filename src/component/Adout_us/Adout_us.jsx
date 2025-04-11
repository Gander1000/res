import { useEffect } from "react";
import scss from "./Adout_us.module.scss";
import Adout from "../../assets/Adout.svg";
import image from "../../assets/Us.svg";
import image_a from "../../assets/a.svg";
import image_b from "../../assets/b.svg";
import image_d from "../../assets/d.svg";

function Adout_us() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={scss.Adout_us}>
      <div className={scss.container}>
        <p>О НАС</p>
        <h1>
          RESIDENT-ПЕРВЫЙ ЖУРНАЛ <br /> О СТРОИТЕЛЬСТВЕ В КЫРГЫЗТАНЕ
        </h1>
        <img className={scss.image_pc} src={Adout} alt="" />
      </div>
      <div className={scss.container_a}>
        <div className={scss.logo_a}>
          <h1>О КОМПАНИИ</h1>
          <hr />
        </div>
        <div className={scss.container_imag}>
          <img className={scss.img_pc} src={image} alt="" />
          <div className={scss.container_title}>
            <span>
              Мы видим свое предназначение в том, чтобы объединить мир через
              истинное кыргызское гостеприимство и национальную культуру. Через
              улучшение качества сервиса, обеспечивать процветание компании и
              сотрудников.
            </span>
            <span>
              Главная цель - превзойти ожидания наших гостей. Орион - больше,
              чем отель! Мы видим свое предназначение в том, чтобы объединить
              мир через истинное кыргызское гостеприимство и национальную
              культуру. Через улучшение качества сервиса, обеспечивать
              процветание компании и сотрудников.
            </span>
          </div>
        </div>
        <div className={scss.container_image}>
          <img src={image_a} alt="" />
          <img src={image_b} alt="" />
          <img className={scss.ofis} src={image_d} alt="" />
        </div>
      </div>
      <div className={scss.container_Frome}>
        <div className={scss.logo}>
          <h1>ПРЕИМУЩЕСТВА</h1>
          <hr />
        </div>
        <div className={scss.box}>
          <div className={scss.carta_a}>
            <div className={scss.blok_gold}>
              <h1>свежие новости в каждую неделю</h1>
              <span>
                Мы видим свое предназначение в том, чтобы объединить мир через
                истинное кыргызское гостеприимство и национальную культуру
                истинное
              </span>
            </div>
            <div className={scss.blok}>
              <h1>Миссия - За гранью обычного</h1>
              <span>
                Мы видим свое предназначение в том, чтобы объединить мир через
                истинное кыргызское гостеприимство и национальную культуру
                истинное
              </span>
            </div>
            <div className={scss.blok}>
              <h1>статьи на интересные темы</h1>
              <span>
                Мы видим свое предназначение в том, чтобы объединить мир через
                кыргызское гостеприимство и национальную культуру истинное
              </span>
            </div>
          </div>
          <div className={scss.carta_b}>
            <div className={scss.blok_b}>
              <h1>Миссия - За гранью обычного</h1>
              <span>
                Мы видим свое предназначение в том, чтобы объединить мир через
                истинное кыргызское гостеприимство и национальную культуру
                истинное Мы видим свое предназначение в том, чтобы объединить
                мир через истинное кыргызское гостеприимство и национальную
                культуру истинное
              </span>
            </div>
            <div className={scss.blok_blek}>
              <h1>архитектура и дизайн</h1>
              <span>
                Мы видим свое предназначение в том, чтобы объединить мир через
                истинное кыргызское гостеприимство и национальную культуру
                истинное
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Adout_us;
