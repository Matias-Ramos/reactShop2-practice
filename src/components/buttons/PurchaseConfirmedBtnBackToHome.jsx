//BTS
import Button from 'react-bootstrap/Button';
//hook
import { useNavigate } from "react-router-dom";


function PurchaseConfirmedBtnBackToHome() {
  //navigate
  const navigate = useNavigate();
  return (
    <Button onClick={ () => navigate("/") } className="m-2">Volver al inicio</Button>       
  )
}

export default PurchaseConfirmedBtnBackToHome