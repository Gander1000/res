import scss from "./Reclam_b.module.scss";
import banner from "../../assets/banner2.svg";

function Reclam_b () {
    return(
        <section className={scss.Reclam}>
            <img src={banner} alt="" />
        </section>
    );
}

export default Reclam_b