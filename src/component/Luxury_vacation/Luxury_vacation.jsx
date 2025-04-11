import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scss from "./Luxury_vacation.module.scss";
import Group from "../../assets/Group.svg";
import hotel from "../../assets/banner_hotel.svg";
import image_o from "../../assets/photos.svg";
import image_b from "../../assets/113.svg";
import image from "../../assets/photo25.svg";
import image_1 from "../../assets/photo26.svg";
import image_2 from "../../assets/photo27.svg";
import image_3 from "../../assets/photo28.svg";
import Ellipse from "../../assets/Ellipse.svg";

function Luxury_vacation() {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  const addComment = () => {
    if (name.trim() && reviewText.trim()) {
      const newComment = {
        id: Date.now(),
        name,
        review: reviewText,
        time: new Date().toLocaleString("ru-RU", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };

      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));

      setName("");
      setReviewText("");
    }
  };

  return (
    <section className={scss.Luxury_vacation}>
      <Link className={scss.a_a} to="/">
        <img className={scss.Group} src={Group} alt="Group" />
      </Link>
      <div className={scss.container}>
        <p className={scss.p}>РОСКОШНЫЙ ОТДЫХ</p>
        <h1 className={scss.h1}>ОТЕЛЬ ОРИОН — НЕ ТОЛЬКО МЕСТО ДЛЯ ОТДЫХА</h1>

        <div className={scss.logo}>
          <p>АЛИНА ИРИСОВА</p>
          <span>
            1 ФЕВРАЛЯ 2024 <img src={Ellipse} alt="Ellipse" /> 5 МИН
          </span>
        </div>

        <img className={scss.hotel} src={hotel} alt="Hotel" />

        <div className={scss.container_title}>
          <div className={scss.conteiner}>
            <div>
              <h1>Миссия - За гранью обычного</h1>
              <span>
                Мы видим свое предназначение в том, чтобы объединить мир через
                истинное кыргызское гостеприимство и национальную культуру.
                Через улучшение качества сервиса, обеспечивать процветание
                компании и сотрудников. Главная цель - превзойти ожидания наших
                гостей. Орион - больше, чем отель! Мы видим свое предназначение
                в том, чтобы объединить мир через истинное кыргызское
                гостеприимство и национальную культуру. Через улучшение качества
                сервиса, обеспечивать процветание компании и сотрудников.
              </span>
            </div>
            <div className={scss.img_comtei}>
              <img src={image_o} alt="" />
            </div>
            <div className={scss.title}>
              <h1>Место для деловых встреч</h1>
              <span>
                В отеле «Орион» есть не только уютные номера и прекрасный
                ресторан, но и высококлассный конференц-зал, который поразит
                своей современной аудиовизуальной техникой и функциональностью.
                Он является идеальным местом для проведения деловых встреч,
                конференций и частных ужинов.
              </span>
              <p>
                Конференц-зал «Ак-Сай» имеет площадь в 123 квадратных метра,
                а его вместимость составляет от 35 до 100 человек в зависимости
                от рассадки. П-образная рассадка вмещает до 30 человек,
                а в театральной версии зала могут поместиться до 100 гостей.
              </p>
              <div className={scss.contei_img_title}>
                <img src={image_b} alt="" />
                <span>
                  В отеле «Орион» - это не только место для отдыха и проживания,
                  но и идеальное место для проведения деловых и культурных
                  мероприятий в самом центре Бишкека. Конференц-зал - прекрасный
                  выбор для тех, кто ищет место для проведения важных
                  мероприятий в комфортном и уютном атмосферном. Современное
                  оборудование и внимательный персонал гарантируют, что каждое
                  мероприятие.
                </span>
              </div>
            </div>
          </div>
          <div className={scss.contoiner}>
            <h1>Читайте также:</h1>
            <div className={scss.cub_img}>
              <img className={scss.Popular} src={image} alt="1" />
              <p>НЕДВИЖИМОСТЬ</p>
              <span>Sumbule - SPA центр незабываемого отдыха, красоты и здоровья</span>
              <h6>
                1 февраля 2024
                <img src={Ellipse} alt="" />3 мин
              </h6>
            </div>
            <div className={scss.cub_img}>
              <img className={scss.Popular} src={image_1} alt="1" />
              <p>НЕДВИЖИМОСТЬ</p>
              <span>Palazzo - ресторан премиум-класса</span>
              <h6>
                1 февраля 2024
                <img src={Ellipse} alt="" />3 мин
              </h6>
            </div>
            <div className={scss.cub_img}>
              <img className={scss.Popular} src={image_2} alt="1" />
              <p>НЕДВИЖИМОСТЬ</p>
              <span>Москва - жилой дом премиум-класса</span>
              <h6>
                1 февраля 2024
                <img src={Ellipse} alt="" />3 мин
              </h6>
            </div>
            <div className={scss.cub_img}>
              <img className={scss.Popular} src={image_3} alt="1" />
              <p>НЕДВИЖИМОСТЬ</p>
              <span>UNO City - новый город-курорт в Кыргызстане</span>
              <h6>
                1 февраля 2024
                <img src={Ellipse} alt="" />3 мин
              </h6>
            </div>
          </div>
        </div>

        <div className={scss.container_button}>
          <h1>теги:</h1>
          <div className={scss.comtei_buttom}>
          <button>отель</button>
          <button>роскошный отдых</button>
          <button>отдых</button>
          <button>место встречи</button>
          </div>
        </div>

        <div className={scss.coment}>
          <h1>ОТЗЫВЫ</h1>
          <input
            className={scss.inp_a}
            type="text"
            placeholder="Имя и фамилия"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className={scss.inp_b}
            placeholder="Напишите отзыв о статье"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button onClick={addComment}>ДОБАВИТЬ</button>
        </div>

        <div className={scss.commentsList}>
          {comments.map((comment) => (
            <div key={comment.id} className={scss.comment}>
              <div className={scss.commentAvatar}></div>
              <div className={scss.commentContent}>
                <strong>{comment.name}</strong>
                <span className={scss.commentTime}>{comment.time}</span>
                <p>{comment.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Luxury_vacation;
