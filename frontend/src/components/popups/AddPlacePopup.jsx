import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isLoading, isOpen, onClose, onAddPlace }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLink = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  };

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      isOpen={isOpen}
      closeAllPopups={onClose}
      buttonText={isLoading ? "Сохранение..." : "Создать"}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_js_name-card"
          id="input-name-card"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={name || ""}
          onChange={handleChangeName}
        />
        <span className="popup__input-error input-name-card-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_js_link-card"
          id="input-url"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={link || ""}
          onChange={handleChangeLink}
        />
        <span className="popup__input-error input-url-error"></span>
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
