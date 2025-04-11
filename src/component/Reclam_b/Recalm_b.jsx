import scss from "./Reclam_b.module.scss";
import banner from "../../assets/banner2.svg";

function Reclam_b () {
    return(
        <section className={scss.Reclam}>
            <a href="https://mega24.kg/ru/">
            <img src={banner} alt="" />
            </a>
        </section>
    );
}

export default Reclam_b