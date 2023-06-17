import PopupWithForm from "./PopupWithForm";
import usePopupClose from "../../hooks/usePopupClose";

export const ConfirmPopup = ({
  card,
  isOpen,
  onClose,
  isLoading,
  onCardDelete,
}) => {
  usePopupClose(isOpen, onClose);

  const deleteCard = (e) => {
    e.preventDefault();
    onCardDelete(card);
  };

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      isOpen={isOpen}
      closeAllPopups={onClose}
      buttonText={isLoading ? "Удаление..." : "Да"}
      onSubmit={deleteCard}
    ></PopupWithForm>
  );
};

export default ConfirmPopup;
