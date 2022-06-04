import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Menucard from "./MenuCard";
import "./menumodal.css";
function MenuModal(props) {
  var [menu, setMenu] = useState([]);
  var [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(props.id);
    fetch("http://localhost:8055/api/menu/restaurant/" + props.id)
      .then((res) => res.json())
      .then((result) => {
        console.log("result=>");
        console.log(result);
        setMenu(result.menu);
      });
  }, []);
  const handleTotalAmount = (add) => {
    console.log(total + add);
    setTotal(total + add);
  };
  return (
    // <Modal show={show} onHide={handleClose}>
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <p className="Shop-Name">{props.shopName}</p>
        </Modal.Title>
      </Modal.Header>
      {menu.length > 0 &&
        menu.map((r, index) => (
          <Menucard
            item={r}
            key={index}
            keys={index}
            handleTotal={handleTotalAmount}
          />
        ))}
      <Modal.Footer>
        <p className="totalAmount">Subtotal: {total}</p>
        <Button variant="outline-danger" className="btn-pay">
          Pay Now
        </Button>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default MenuModal;
