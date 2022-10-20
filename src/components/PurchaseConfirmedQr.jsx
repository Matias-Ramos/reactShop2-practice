import "../css/purchaseConfirmedQrSt.css";
//qr documentation: https://goqr.me/api/

function PurchaseConfirmedQr(props) {
  return (
    <div id="qrCodeContainer">
      <img
        src={`http://api.qrserver.com/v1/create-qr-code/?data=Order-${props.orderId}!&size=100x100`}
        alt=""
      />
    </div>
  );
}

export default PurchaseConfirmedQr;
