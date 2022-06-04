import QuickSearch from "../QuickSearch/QuickSearch";
import WallpaperPage from "../WallPaperPage/WallpaperPage";
import "./home.css";
function Home(props) {
  console.log("Home page");
  return (
    <div className="Home">
      <WallpaperPage
        token={props.tokenData}
        handelToken={(data) => {
          props.handelTokenData(data);
        }}
      />
      <QuickSearch />
    </div>
  );
}

export default Home;
