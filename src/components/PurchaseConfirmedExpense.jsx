//BTS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PurchaseConfirmedExpense({ finalExpense }) {
  return (
    <>
      <Row>
        <Col lg={5} xl={5} className="h2purchaseConf">
          <h2>Total a abonar: </h2>
        </Col>
        <Col className="dataPurchaseConf">
          <span>${finalExpense}</span>
        </Col>
      </Row>
    </>
  );
}

export default PurchaseConfirmedExpense;
