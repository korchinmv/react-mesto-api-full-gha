const InfoTooltip = ({ name, isOpen, onClose, text, image, alt }) => {
  return (
    <div className={`popup ${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <img className="popup__icon" src={image} alt={alt} />
        <p className="popup__text">{text}</p>
        <button
          className="popup__close close-photo-popup hover"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default InfoTooltip;
