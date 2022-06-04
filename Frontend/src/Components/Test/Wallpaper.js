import "./home.css";
function Wallpaper1() {
  const handleChange = () => {
    console.log("Handel Change");
  };
  return (
    <div>
      <img src="/images/homepageimg.png" width="100%" height="450" />

      <div className="logo">
        <p>e!</p>
      </div>
      <div className="headings">Find the best restaurants, cafes, bars</div>
      <div className="locationSelector">
        <select className="locationDropdown" onChange={handleChange()}>
          <option value="0">Select</option>
        </select>
        <input
          className="restaurantsinput"
          type="text"
          placeholder="Search Restaurant"
        />
      </div>
    </div>
  );
}

export default Wallpaper;
