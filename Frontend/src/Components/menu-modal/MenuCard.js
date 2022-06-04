import { Modal, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./MenuCard.css";
function MenuCard(props) {
  var [quantity, setQuantity] = useState(0);
  const menu = props.item;

  useEffect(() => {
    var vegicon = document.getElementsByClassName("vegLogo")[props.keys];
    var bg = menu.isVeg ? "green" : "red";
    vegicon.style.background = bg;
  }, []);
  //console.log(props.keys);
  const handleIncreaseQut = () => {
    console.log("Before " + quantity);
    setQuantity(quantity + 1);
    console.log("After " + quantity);
    props.handleTotal(menu.price);
    console.log("menu price=" + menu.price);
  };
  const handledecreaseQut = () => {
    console.log("Before " + quantity);
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      props.handleTotal(menu.price * -1);
    }
    if (quantity <= 1) {
      var showQuantity =
        document.getElementsByClassName("showQuantity")[props.keys];
      showQuantity.style.display = "none";
      var hiddenQuantity =
        document.getElementsByClassName("hiddenQuantity")[props.keys];
      hiddenQuantity.style.display = "flex";
    }
    console.log("After " + quantity);
  };
  const addQuantity = () => {
    console.log(quantity);
    setQuantity(1);
    props.handleTotal(menu.price);
    var showQuantity =
      document.getElementsByClassName("showQuantity")[props.keys];
    showQuantity.style.display = "flex";
    var hiddenQuantity =
      document.getElementsByClassName("hiddenQuantity")[props.keys];
    hiddenQuantity.style.display = "none";
  };
  return (
    <Modal.Body>
      <Card style={{ width: "95%" }}>
        <Row>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Title>
                <div className="logoContainer">
                  <div className="vegLogo"></div>
                </div>
                <p>{menu.name}</p>
                <p>'{menu.price}'</p>
              </Card.Title>
              <Card.Text>{menu.detail}</Card.Text>
            </Card.Body>
          </Col>
          <Col xs={6} md={4}>
            <div className="menu">
              <img src={menu.imageURL} alt="img" className="menuImg" />
              <div className="quantity showQuantity">
                <button
                  className="increase"
                  onClick={() => {
                    handleIncreaseQut();
                  }}
                >
                  +
                </button>
                <span className="quantityValue"> {quantity} </span>
                <button
                  className="decrease"
                  onClick={() => {
                    handledecreaseQut();
                  }}
                >
                  -
                </button>
              </div>
              <div className="quantity hiddenQuantity">
                <Button
                  onClick={() => {
                    addQuantity();
                  }}
                >
                  ADD
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Modal.Body>
  );
}
export default MenuCard;
