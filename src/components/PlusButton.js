import plusIcon from "../assets/plus.png";

const PlusButton = ({ otherClasses, text, onClick }) => {
  const classes = otherClasses ? `plus-button ${otherClasses}` : "plus-button";

  return (
    <div className={classes}>
      <button className="clickable" onClick={onClick}>
        <img src={plusIcon} alt="plus icon" />
      </button>
      <span className="display-text">{text}</span>
    </div>
  );
};

export default PlusButton;
