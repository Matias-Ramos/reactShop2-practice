//BTS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PurchaseConfirmedAddress() {
  return (
    <>
    <Row>
        <Col lg={5} xl={5} className="h2purchaseConf">
            <h2>Dirección de retiro: </h2>
        </Col>
        <Col className="dataPurchaseConf">
            <span>Avenida Siempre Viva 742</span>
        </Col>
    </Row>
    </>
  )
}

export default PurchaseConfirmedAddress