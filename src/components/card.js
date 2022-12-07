const Card = (props) => {
  const { customClass } = props;
  return (
    <div className={customClass}>
      {/* <div className="card-header">{card.cardHead}</div>
      <div className="card-body">{card.cardBody}</div> */}
      {props.children ?? <></>}
      {/* <div className="card-header">card Header</div> */}
      {/* <div className="card-body">cardBody</div> */}
    </div>
  );
};

export default Card;
