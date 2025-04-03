import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scss from "./Luxury_vacation.module.scss";
import Group from "../../assets/Group.svg";
import hotel from "../../assets/banner_hotel.svg";
import content from "../../assets/content.svg";
import real_eatate_hotel from "../../assets/real_eatate_hotel.svg";
import Frame from "../../assets/Frame.svg";
import Ellipse from "../../assets/Ellipse.svg";
import real_eatate_15 from "../../assets/real_eatate_15.svg";

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
          <img className={scss.content} src={content} alt="Content" />
          <img className={scss.real_eatate_hotel} src={real_eatate_hotel} alt="Hotel" />
          <img className={scss.Teg} src={Frame} alt="Frame" />
        </div>

        <img className={scss.coment_mob} src={real_eatate_15} alt="Comments" />

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

