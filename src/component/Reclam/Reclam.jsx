import scss from "./Reclam.module.scss";
import banner from "../../assets/banner2.svg";

function Reclam () {
    return(
        <section className={scss.Reclam}>
            <img src={banner} alt="" />
        </section>
    );
}

export default Reclam