import usePopupClose from "../../hooks/usePopupClose";

function ImagePopup({ name, card, isOpen, onClose }) {
  usePopupClose(isOpen, onClose);
  return (
    <div className={`popup ${name} ${isOpen && "popup_opened"}`}>
      <figure className="popup__photo">
        <button
          className="popup__close close-photo-popup hover"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption className="popup__figcaption">
          <p className="popup__caption">{`${card.name}`}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
