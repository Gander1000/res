import scss from "./Contacts.module.scss";
import contacts from "../../assets/text_contacts.svg";
import Logo from "../../assets/interview.svg";
import status from "../../assets/Frame_static.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Insta from "../../assets/Insta.svg";
import Tic_tok from "../../assets/Tic_tok.svg";

function Contacts () {
    return(
        <section className={scss.Contacts}>
                <img className={scss.Logo} src={Logo} alt="" />
            <div className={scss.container}>
                <div>
                <img className={scss.contacts_img} src={contacts} alt=""/>
                </div>
                <div className={scss.Linc}>
                    <a href="">journal.resident.kg@gmail.com</a>
                    <a href="">pr.resident.kg@gmail.com</a>
                    <a href="">hr.resident.kg@gmail.com</a>
                </div>
                <div>
                    <img className={scss.status} src={status} alt="" />
                </div>
                <div className={scss.container_Linc}>
                    <div className={scss.mes}>
                        <a href=""><img src={Facebook} alt="" /></a>
                        <a href=""><img src={Twitter} alt="" /></a>
                        <a href=""><img src={Insta} alt="" /></a>
                        <a href=""><img src={Tic_tok} alt="" /></a>
                    </div>
                    <p>Журнал зарегистрирован в Министерстве юстиции КР</p>
                </div>
            </div>
        </section>
    );
}

export default Contacts