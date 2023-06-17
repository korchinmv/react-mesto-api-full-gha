import Card from "./Card.jsx";

export const Gallery = ({
  cards,
  onCardClick,
  onCardLike,
  openConfirmPopup,
}) => {
  return (
    <section className="gallery">
      <div className="container">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardLike={onCardLike}
              onCardClick={onCardClick}
              openConfirmPopup={openConfirmPopup}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
