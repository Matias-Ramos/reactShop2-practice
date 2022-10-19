//BTS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Components
import PurchaseConfirmedQr from './PurchaseConfirmedQr'; 

function PurchaseConfirmedH1( {orderId} ) {
  return (
    <>
    <Row className="my-3">
        <Col lg="auto" xl="auto">
            <PurchaseConfirmedQr orderId={orderId} />
        </Col>
        <Col>
            <h1>La compra fue realizada con éxito</h1>
            <span>A la brevedad recibirás un email con toda la información de tu operación.</span>
        </Col>
    </Row>
    </>
  )
}

export default PurchaseConfirmedH1