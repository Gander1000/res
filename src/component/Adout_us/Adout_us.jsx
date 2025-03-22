import scss from "./Adout_us.module.scss";
import Adout from "../../assets/Adout.svg";
import text from "../../assets/Text_us.svg";
import image from "../../assets/Us.svg";
import image_a from "../../assets/a.svg";
import image_b from "../../assets/b.svg";
import image_d from "../../assets/d.svg";
import Frame_a from "../../assets/Frame_a.svg";
import Frame_b from "../../assets/Frame_b.svg";
import Frame_d from "../../assets/Frame_d.svg";
import Frame_cub from "../../assets/Frame_cub.svg";
import Frame_blec from "../../assets/Frame_blec.svg";
import image_aa from "../../assets/111.svg";
import title from "../../assets/title.svg";
import image_mob from "../../assets/5.png";
import image_mob_a from "../../assets/2.png";
import image_mob_b from "../../assets/4.png";
import foter from "../../assets/foter.svg";

function Adout_us() {
  return (
    <section className={scss.Adout_us}>
      <div className={scss.container}>
        <p>О НАС</p>
        <h1>
          RESIDENT-ПЕРВЫЙ ЖУРНАЛ <br /> О СТРОИТЕЛЬСТВЕ В КЫРГЫЗТАНЕ
        </h1>
        <img className={scss.image_mob} src={image_aa} alt="" />
        <img className={scss.image_pc} src={Adout} alt="" />
      </div>
      <div className={scss.container_a}>
        <div className={scss.logo_a}>
        <h1>О КОМПАНИИ</h1>
        <hr />
        </div>
        <div className={scss.container_imag}>
          <img className={scss.img_mob} src={title} alt="" />
          <img className={scss.img_pc} src={image} alt="" />
          <img className={scss.img_pc} src={text} alt="" />
        </div>
        <div className={scss.container_image}>
          <img src={image_a} alt="" />
          <img src={image_b} alt="" />
          <img className={scss.ofis} src={image_d} alt="" />
        </div>
        <div className={scss.container_image_mob}>
          <img src={image_mob} alt="" />
          <img src={image_mob_a} alt="" />
          <img src={image_mob_b} alt="" />
        </div>
      </div>
      <div className={scss.container_Frome}>
        <div className={scss.logo}>
          <h1>ПРЕИМУЩЕСТВА</h1>
          <hr />
        </div>
        <div className={scss.box}>
          <div className={scss.image}>
            <img className={scss.Fra_cub} src={Frame_a} alt="" />
            <img className={scss.Fra_cub} src={Frame_b} alt="" />
            <img className={scss.Fra_cub} src={Frame_d} alt="" />
          </div>
          <div className={scss.image_a}>
            <img className={scss.Fr_cub} src={Frame_cub} alt="" />
            <img className={scss.Fra_cub} src={Frame_blec} alt="" />
          </div>
        </div>
        <div className={scss.box_mob}>
        <img src={foter} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Adout_us;
