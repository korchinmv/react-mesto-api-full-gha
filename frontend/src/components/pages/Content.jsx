import { Profile } from "../Profile";
import { Gallery } from "../Gallery";

const Content = ({
  cards,
  onEditAvatar,
  onEditProfile,
  openConfirmPopup,
  onAddPlace,
  onCardClick,
  onCardLike,
}) => {
  return (
    <>
      <Profile
        onEditAvatar={onEditAvatar}
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
        openConfirmPopup={openConfirmPopup}
      />
      <Gallery
        cards={cards}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
        openConfirmPopup={openConfirmPopup}
      />
    </>
  );
};

export default Content;
