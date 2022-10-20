//BTS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PurchaseConfirmedDate({ getDate }) {
  return (
    <>
      <Row>
        <Col lg={5} xl={5} className="h2purchaseConf">
          <h2>Fecha: </h2>
        </Col>
        <Col className="dataPurchaseConf">
          <span>{getDate()}</span>
        </Col>
      </Row>
    </>
  );
}

export default PurchaseConfirmedDate;
