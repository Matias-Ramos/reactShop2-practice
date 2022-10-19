//BTS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function PurchaseConfirmedTable( {cart} ) {
    return (
    <>
    <Row>
        <Col lg={5} xl={5} className="h2purchaseConf">
            <h2>Detalle: </h2>
        </Col>
    </Row>
    <Row>
        <Col className="dataPurchaseConf">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Valor de la compra</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map( (product, index) => {
                  return(
                    <tr key={product.id}>
                      <td>{index+1}</td>
                      <td>{product.product_name}</td>
                      <td>{product.desiredAmount}</td>
                      <td>$ { (product.price*product.desiredAmount).toFixed(2) }</td>
                    </tr>
                  ) } )
              }
            </tbody>
          </Table>
        </Col>
    </Row>
    </>
    )
}

export default PurchaseConfirmedTable;