import "./home.css";

function QuickSearch1() {
  return (
    <div>
      <div className="quicksearch">
        <p className="quicksearchHeading">Quick Searches</p>
        <p className="quicksearchSubHeading">
          Discover restaurants by type of meal
        </p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="images/breakfast.jpg" height="150" width="140" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">Breakfast</div>
                  <div className="componentSubHeading">
                    Start your day with exclusive breakfast options
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="images/breakfast.jpg" height="150" width="140" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">Lunch</div>
                  <div className="componentSubHeading">
                    Start your day with exclusive lunch options
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="images/breakfast.jpg" height="150" width="140" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">Snacks</div>
                  <div className="componentSubHeading">
                    Start your day with exclusive snacks options
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="images/breakfast.jpg" height="150" width="140" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">Dinner</div>
                  <div className="componentSubHeading">
                    Start your day with exclusive dinner options
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="images/breakfast.jpg" height="150" width="140" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">Drinks</div>
                  <div className="componentSubHeading">
                    Start your day with exclusive drinks options
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="tileContainer">
                <div className="tileComponent1">
                  <img src="images/breakfast.jpg" height="150" width="140" />
                </div>
                <div className="tileComponent2">
                  <div className="componentHeading">NightLife</div>
                  <div className="componentSubHeading">
                    Start your day with exclusive nightlife options
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
