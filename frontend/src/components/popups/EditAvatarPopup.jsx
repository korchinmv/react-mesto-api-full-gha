import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isLoading, isOpen, onClose, onUpdateAvatar }) => {
  const textInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: textInput.current.value,
    });
  };

  useEffect(() => {
    textInput.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={isOpen}
      closeAllPopups={onClose}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_js_link-avatar"
          id="input-avatar"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          ref={textInput}
        />
        <span className="popup__input-error input-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
};
export default EditAvatarPopup;
