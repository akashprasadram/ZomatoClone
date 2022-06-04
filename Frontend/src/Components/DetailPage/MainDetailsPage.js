import Header from "../Header/Header";
import Details from "./Details";

function MainDetailsPage(props) {
  return (
    <div>
      <Header token={props.tokenData} handelToken={props.handelTokenData} />
      <Details />
    </div>
  );
}
export default MainDetailsPage;
