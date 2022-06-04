import "./quicksearch.css";
function QuickSearchCard(props) {
  return (
    <div
      className="card mb-3 card-container"
      onClick={() => {
        props.handleClick(props.mealdata._id, props.mealdata.name);
      }}
    >
      <div className="row g-0">
        <div className="col-4">
          <img
            src={props.mealdata.image}
            className="img-fluid catalog-img"
            alt="..."
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{props.mealdata.name}</h5>
            <p className="card-text">
              <small className="text-muted">{props.mealdata.content}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuickSearchCard;
