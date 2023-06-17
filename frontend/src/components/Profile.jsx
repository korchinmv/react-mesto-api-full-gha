import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export const Profile = ({ onEditAvatar, onEditProfile, onAddPlace }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <div className="container">
        <div className="profile__inner">
          <div className="profile__info">
            <button
              className="profile__avatar-btn"
              type="button"
              onClick={onEditAvatar}
            >
              <img
                className="profile__avatar"
                src={currentUser.avatar}
                alt="Аватар"
              />
            </button>

            <div className="profile__content">
              <div className="profile__content-box">
                <h1 className="profile__name">{currentUser.name}</h1>

                <button
                  className="profile__edit hover"
                  type="button"
                  aria-label="Редактировать профиль"
                  onClick={onEditProfile}
                />
              </div>

              <p className="profile__profession">{currentUser.about}</p>
            </div>
          </div>

          <button
            className="profile__add hover"
            type="button"
            aria-label="Добавить место"
            onClick={onAddPlace}
          />
        </div>
      </div>
    </section>
  );
};
