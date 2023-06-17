import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, openConfirmPopup }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button hover ${
    isLiked && "card__like-button_active"
  }`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const openPopup = () => {
    openConfirmPopup(card);
  };

  return (
    <li className="gallery__item">
      <article className="card">
        {isOwn && (
          <button
            className="card__trash-button hover"
            type="button"
            aria-label="Удалить место"
            onClick={openPopup}
          />
        )}

        <img
          className="card__photo"
          src={card.link}
          alt={`Фотография ${card.name}`}
          onClick={handleClick}
        />

        <div className="card__box">
          <h2 className="card__name">{card.name}</h2>
          <div className="card__like">
            <button
              className={cardLikeButtonClassName}
              type="button"
              aria-label="Нравится"
              onClick={handleLikeClick}
            />

            <span className="card__like-num">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
