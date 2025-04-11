import scss from "./Reclam_a.module.scss";
import banner from "../../assets/banner2_1.svg";

function Reclam_a() {
  return (
    <section className={scss.Reclam_a}>
      <a href="https://halykbank.kz/kz">
        <img src={banner} alt="" />
      </a>
    </section>
  );
}

export default Reclam_a;
