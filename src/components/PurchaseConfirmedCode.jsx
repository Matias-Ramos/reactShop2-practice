//BTS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PurchaseConfirmedCode( {orderId} ) {
  return (
    <>
    <Row>
        <Col lg={5} xl={5} className="h2purchaseConf" >
            <h2>Código: </h2>
        </Col>
        <Col className="dataPurchaseConf">
            <span>{orderId}</span>
        </Col>
    </Row>
    </>
  )
}

export default PurchaseConfirmedCode