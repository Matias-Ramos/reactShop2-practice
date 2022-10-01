function CartContainer({totalQtyBought}) {
  return (
    <div className="square border border-dark m-3 p-2">
        <img src="https://icongr.am/clarity/shopping-cart.svg?size=50&color=currentColor" alt="cart Icon" />
        <span>This is the cart section</span>
        <br/>
        <span>So far you have bought: {totalQtyBought} products!</span>

    </div>
  )
}

export default CartContainer